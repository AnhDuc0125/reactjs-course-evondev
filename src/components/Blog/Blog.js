import useLinkBlank from '../../hooks/useLinkBlank';
import useHover from '../../hooks/useHover';

const Blog = () => {
  const { contentRef } = useLinkBlank();
  const { hovered, elmRef } = useHover();

  return (
    <div className="blog-content" ref={contentRef}>
      <div className="mb-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rem, iure itaque autem
          eveniet commodi, eos porro, laborum accusantium recusandae ullam expedita quae voluptate
          numquam impedit asperiores iste vitae. Maxime?
        </p>
        <a
          href="google.com"
          className={`underline ${hovered ? 'text-green-400' : ''}`}
          ref={elmRef}
        >
          Click me!
        </a>
      </div>
      <div className="mb-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rem, iure itaque autem
          eveniet commodi, eos porro, laborum accusantium recusandae ullam expedita quae voluptate
          numquam impedit asperiores iste vitae. Maxime?
        </p>
        <a href="google.com" className="underline">
          Click me!
        </a>
      </div>
      <div className="mb-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rem, iure itaque autem
          eveniet commodi, eos porro, laborum accusantium recusandae ullam expedita quae voluptate
          numquam impedit asperiores iste vitae. Maxime?
        </p>
        <a href="google.com" className="underline">
          Click me!
        </a>
      </div>
    </div>
  );
};

export default Blog;
