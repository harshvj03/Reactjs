/**
 * <div id="parent">
 *    <div id="child">
 *      <h1>Hi I am H1 tag</h1>
 *      <h2>Hi I am H2 tag</h2>
 *    </div>
 *    <div id="child2">
 *      <h3>Hi I am H3 tag</h3>
 *      <h4>Hi I am H4 tag</h4>
 *    </div>
 * </div> 
 */
    
    const parent= React.createElement
    ("div",
    {id:"parent"},
    [React.createElement("div",
    {id:"child"},[React.createElement("h1",{id:"heading"},"I am H1 tag"),
    React.createElement("h2",{id:"heading1"},"I am H2 tag")]),React.createElement("div",
    {id:"child2"},[React.createElement("h3",{id:"heading2"},"I am H3 tag"),
    React.createElement("h4",{id:"heading3"},"I am H4 tag")])]);
    const root= ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
