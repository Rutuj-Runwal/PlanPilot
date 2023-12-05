import MDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "easymde";
import { useMemo } from "react";
const TodoCreate = () => {
  const MDE_OPTIONS = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
      renderingConfig: {
        singleLineBreaks: false,
        codeSyntaxHighlighting: false,
      },
    } as SimpleMDE.Options;
  }, []);

  return (
    <div className="m-5">
      <h1 className="text-3xl font-bold my-5">Create a new task</h1>
      <form
        className="flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
          placeholder="Enter Title"
        />
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Description
        </label>
        {/* <textarea
          id="message"
          rows={3}
          className="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Description..."
        ></textarea> */}
        <div className="flex w-1/3">
          <MDE
            placeholder="Description"
            className="w-full"
            options={MDE_OPTIONS}
          />
        </div>
        <button className="rounded-md bg-indigo-600 justify-center w-24 p-1.5 shadow-sm text-white focus:outline-indigo-950 my-3">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoCreate;
