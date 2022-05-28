import React from 'react' //rfce：创建react函数快捷命令
import Header from '../components/Header'
import Hero from '../components/Hero'
import Solutions from '../components/Solutions'

function Index() {
  return (
    <div className='container mx-auto p-4'>
        <Header></Header>
        <main className='mt-20'>
            <Hero></Hero>
            <section className='md:p-20'>
                <Solutions></Solutions>
            </section>
        </main>
    </div>
  )
}

export default Index