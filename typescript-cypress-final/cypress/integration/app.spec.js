const matter = require('gray-matter')
const { parseISO, format } = require('date-fns')

describe('App', function () {
  beforeEach(function () {
    cy.visit('/')
  })

  it('displays header on home page', function () {
    cy.get('h1').should('contain', '[Your Name]')
  })

  it('renders a list of posts', function () {
    // Testing Tip:
    // Calculate values vs hard coding numbers.  This makes tests more resilient and adaptive to change.
    // cy.task("getPostCount") calculates the post count in Node
    // Learn more about Cypress Tasks: https://on.cypress.io/task
    cy.task('getPostCount').then(count => {
      cy.get('[data-test*=post]').should('have.length', count)
    })
  })

  it('navigates to a post and verifies header, date and title meta tag', function () {
    // Get the first post in the list
    cy.get('[data-test*=post]')
      .first()
      .then(post => {
        // Navigate to the post
        cy.get(post)
          .click()
          .invoke('attr', 'href')
          .then(href => {
            // Verify the new location matches the href clicked
            cy.location('pathname').should('equal', href)

            // Read the contents of this post from it's markdown file
            cy.readFile(`.${href}.md`).then(markdown => {
              // Extract the post metadata
              const postMetadata = matter(markdown)
              const { title, date } = postMetadata.data
              const formattedDate = format(parseISO(date), 'LLLL d, yyyy')

              // Verify the title and formatted time
              cy.get('[data-test=post-title]').should('contain', title)
              cy.get('time').should('have.text', formattedDate)

              // Verify the title meta tag
              cy.get("meta[property='og:title']").should(
                'has.attr',
                'content',
                title
              )
            })
          })
      })
  })
})
