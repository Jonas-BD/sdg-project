import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router'
import { MainPage } from './Pages/MainPage/MainPage'
import { EducationPage } from './Pages/EducationPage/EducationPage'
import { Header } from './Components/Header/Header'
import { CustomGoalPage } from './Pages/CustomGoalPage/CustomGoalPage'
import { FAQPage } from './Pages/FAQPage/FAQPage'
import { ContactPage } from './Pages/ContactPage/ContactPage'
import { LoginPage } from './Pages/LoginPage/LoginPage'
import { ErrorPage } from './Pages/ErrorPage/ErrorPage'
import { Footer } from './Components/Footer/Footer'
import { GoalDetails } from './Components/GoalDetails/GoalDetails'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path='/goal/:goalId' element={<GoalDetails />} />
          <Route path='/education' element={<EducationPage />} />
          <Route path='/customgoal' element={<CustomGoalPage />} />
          <Route path='/faq' element={<FAQPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
