import { Fragment } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Tournaments, Fixtures, Details  } from "./pages"
import { CombineProviders, providers } from "./contexts"




function App() {
  return (
    <Fragment>
      <CombineProviders contexts={providers}>
        <Router>
          <Routes>
            <Route index={true} path="/" element={<Tournaments />} />
            <Route path="/details" element={<Details />} />
            <Route path="/fixtures" element={<Fixtures />} />
          </Routes>
        </Router>
      </CombineProviders>
    </Fragment>
  )
}

export default App
