// page.tsx 默认 Server Component
import WhalesflowClient from './components/WhalesflowClient';

import ContentPlaceHolder from './components/ContentPlaceHolder'
import CardsWrapper from './components/CardsWrapper';
import Search from './components/Search';


export default function Page() {
  return (

    <main className="main-content">


    <header></header>


    <section className='bg-gray-900 pt-14 pb-20'> 
        <Search/>
    </section>

    <section className='bg-gray-100  pb-20  p-4'> 

      <ContentPlaceHolder/>

      <CardsWrapper/>

    </section>

    <footer className='bg-gray-200 pt-14 pb-20'>

    </footer>
      
    </main>
    

);
}
