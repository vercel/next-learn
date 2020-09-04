const matter = require('gray-matter');
const { parseISO, format } = require('date-fns')

describe('App', function() {
    beforeEach(function() {
        cy.visit("/")
    })

    it('displays header on home page', function() {
        cy.get('h1').should("contain", "[Your Name]")
    })

    it('renders a list of posts', function() {
        // Testing Tip:
        // Calculate values vs hard coding numbers.  This makes tests more resilient and adaptive to change.
        // cy.task("getPostCount") calculates the post count in Node
        // Learn more about Cypress Tasks: https://on.cypress.io/task
        cy.task('getPostCount').then(count => {
            cy.get('[data-test*=post]').should("have.length", count)
        })
    })

    it('navigates to a post and verifies header, date and title meta tag', function() {
        cy.get('[data-test*=post]').first().then(post => {
            cy.get(post).click().invoke('attr', 'href').then(href => {
                cy.location("pathname").should("equal", href)

                cy.readFile(`.${href}.md`).then(markdown => {
                    const postMetadata = matter(markdown)
                    const { title, date} = postMetadata.data
                    const formattedDate = format(parseISO(date), 'LLLL d, yyyy')

                    cy.get('[data-test=post-title]').should('contain', title)
                    cy.get('time').should('have.text', formattedDate)

                    cy.get("meta[property='og:title']").should('has.attr', 'content', title)
                })
            })
        })
    })
})