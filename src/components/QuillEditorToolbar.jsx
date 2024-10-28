export const QuillEditorToolbar = () => (
  <div id="toolbar">
    {/* Header Dropdown */}
    <select
      className="ql-header"
      defaultValue={""}
      onChange={(e) => e.persist()}
    >
      <option value="1">Heading 1</option>
      <option value="2">Heading 2</option>
      <option value="">Normal</option>
    </select>

    {/* Font Style */}
    <select className="ql-font" defaultValue="">
      <option value="sans-serif">Sans Serif</option>
      <option value="serif">Serif</option>
      <option value="monospace">Monospace</option>
    </select>

    {/* Bold, Italic, Underline */}
    <button className="ql-bold" />
    <button className="ql-italic" />
    <button className="ql-underline" />

    {/* Text Color */}
    <select className="ql-color" />

    {/* Background Color */}
    <select className="ql-background" />

    {/* Blockquote */}
    <button className="ql-blockquote" />

    {/* Code Block */}
    <button className="ql-code-block" />

    {/* Lists */}
    <button className="ql-list" value="ordered" />
    <button className="ql-list" value="bullet" />

    {/* Link, Image */}
    <button className="ql-link" />
    {/* <button className="ql-image" /> */}

    {/* Align Options */}
    <select className="ql-align" />

    {/* Undo/Redo */}
    <button className="ql-undo">
      <i className="fa fa-undo"></i>
    </button>
    <button className="ql-redo">
      <i className="fa fa-redo"></i>
    </button>
  </div>
);
