import Modal from 'react-modal';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { twilight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '100%',
  },
};

Modal.setAppElement('#__next');

export default function CodeSampleModal({ isOpen, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Code Sample"
    >
      <p>Wonder no more!</p>
      <SyntaxHighlighter language="javascript" style={twilight}>
        {`function printHelloWorld() { \n  console.log('Hello World!'); \n}`}
      </SyntaxHighlighter>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
}
