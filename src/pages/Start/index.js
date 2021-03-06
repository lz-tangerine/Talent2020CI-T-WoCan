import React from 'react';
import { useHistory } from 'react-router-dom';
import CardArea from '../../components/CardArea';
import FirstSteps from '../../components/ButtonFirstSteps';
import Header from '../../components/Header';
import '../../assets/scss/Main.scss';

const Start = () => {
  const history = useHistory();

  return (
    <>
      <Header />
      <main className='main'>
        <section className='title'>
          <h1>primeiros passos</h1>
          <FirstSteps
            children='lógica de programação'
            title='Link externo sobre lógica de programação'
            url='https://www.iped.com.br/cursos-gratis/programacao-e-desenvolvimento/curso-rapido/introducao-logica-programacao'
          />
          <FirstSteps
            children='algoritmos'
            title='Link externo sobre algoritmos'
            url='https://canaldoensino.com.br/blog/curso-online-gratuito-de-algoritmo'
          />
          <FirstSteps
            children='back-end ou front-end?'
            title='Link externo sobre Back-end e Front-end'
            url='https://tableless.github.io/iniciantes/manual/obasico/o-que-front-back.html'
          />
        </section>
        <section className='cards'>
          <CardArea
            area='front'
            onClick={() => history.push('/frontend')}
            title='Front-end'
            alt='Front-end'
          />{' '}
          <CardArea
            area='back'
            onClick={() => history.push('/backend')}
            title='Back-end'
            alt='Back-end'
          />{' '}
          <CardArea
            area='devops'
            onClick={() => history.push('/devops')}
            title='DevOps'
            alt='DevOps'
          />
        </section>
      </main>
    </>
  );
};

export default Start;
