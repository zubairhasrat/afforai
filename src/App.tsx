import { Header } from './components/header';
import { Home } from './components/home';
import { User } from './components/user';
import { Document } from './components/documents';
import { Workflow } from './components/workflow';
import { Review } from './components/review';

export default function App() {
  return (
    <div className="main">
      <div className="flex flex-col">
        <div>
          <Header />
          <Home />
          <User />
          <Document />
          <Workflow />
          <Review />
        </div>
      </div>
    </div>
  )
}
