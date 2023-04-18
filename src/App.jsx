function App() {
    return (
        <div className="App">
            <h1
                by-color="indigo-600 hover:(red-800)"
                by-bg="red hover:(indigo-200)"
                by-font="bold sans hover:(light)"
                by-p="14px hover:(7px)"
            >
                Hello Vite + React + UnoCSS!
            </h1>
            <h2 className="font-bold font-mono text-indigo-600 bg-blue-100 hover:(bg-blue-400 text-black-100 font-mono font-thin)">
                firacode font === !== {" <= >= <!= >!="} <span>👍</span>
            </h2>
            {/* <div className="i-mdi-alarm" /> */}
        </div>
    )
}
export default App
