import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '/layouts/layout'
import Home from '/pages/home'
import Docs from '/pages/docs'
import Components from '/pages/components'
import NotFound from '/pages/notfound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="docs" element={<Docs />} />
          <Route path="components" element={<Components />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
