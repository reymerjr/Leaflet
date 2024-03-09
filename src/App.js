import React from 'react';
import './App.css';
import loogo from './assets/leaf.png';
import balayong from  './assets/leaf-balayong.jpg';
import bayabas from  './assets/leaf-bayabas.png';
import betis from  './assets/leaf-betis.jpg';
import dao from  './assets/leaf-dao.jpg';
import dita from  './assets/leaf-dita.jpg';
import guyabano from  './assets/leaf-guyabano.jpg';
import ilang from  './assets/leaf-ilangilang.jpg';
import ipil from  './assets/leaf-ipil.jpg';
import kalios from  './assets/leaf-kalios.jpg';
import kamagong from  './assets/leaf-kamagong.jpg';
import mulawin from  './assets/leaf-mulawin.jpg';
import narra from  './assets/leaf-narra.jpg';
import sintores from  './assets/leaf-sintores.jpg';
import yakal from  './assets/leaf-yakal.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={loogo} alt="Leaflet Logo" className="header-logo" />
        <div className="header-title">
          <h1>
            Leaflet <span className="in">Scan </span> <span>Dictionary </span>{' '}
            <span>About</span>
          </h1>
        </div>
      </header>
      <div className="container">
        <h1 className="D">DICTIONARY</h1>
        <div className="b1">
          <h2 className="h21">Leaflet</h2>
          <p className="no1">
            1. a printed sheet of paper, sometimes folded, containing{' '}
            <b> information </b> or advertising and usually distributed free.
          </p>
          <p className="no2">
            2. Each of the leaflike structures that together make up a
            compound leaf.
          </p>
        </div>
        <div className="b1">
          <h2 className="h21">Serenity Garden</h2>
          <p className="no1">
          Found just behind the College Promenade and Mater et Magistra's blessed gaze, the zen-inspired Serenity Garden which can be visited by students and staffs alike to encourage contemplation and reflection to those experience its peacefulness. Integrating FAITH Colleges' belief that students learn in three ways, that of which: through classroom lessons; through integration of values in various subjects; and most importantly, through the environment. The Serenity Garden exudes a strong sense of order, suggesting that everything has a natural order and a natural rule.
          </p> 
        </div>
        <div className="b3">
          <h2 className="h21">Serenity Garden</h2>
          <h3 className='ci'>
            Click the image to know more
          </h3>
          <div className='im'>
          <div className='i+t`'>
          <img src={balayong} alt="Leaflet Logo" className="pic" />
          <h3 className='imtext'>balayong</h3>
          </div>
          <div className='i+t`'>
          <img src={bayabas} alt="Leaflet Logo" className="pic" />
          <h3 className='imtext'>bayabas</h3>
          </div>
          <div className='i+t`'>
          <img src={betis} alt="Leaflet Logo" className="pic" />
          <h3 className='imtext'>betis</h3>
          </div>
          <div className='i+t`'>
          <img src={dao} alt="Leaflet Logo" className="pic" />
          <h3 className='imtext'>dao</h3>
          </div>
          <div className='i+t`'>
          <img src={dita} alt="Leaflet Logo" className="pic" />
          <h3 className='imtext'>dita</h3>
          </div>
          <div className='i+t`'>
          <img src={guyabano} alt="Leaflet Logo" className="pic" />
          <h3 className='imtext'>guyabano</h3>
          </div>
          <div className='i+t`'>
          <img src={ilang} alt="Leaflet Logo" className="pic" />
          <h3 className='imtext'>ilangilang</h3>
          </div>
          <div className='i+t`'>
          <img src={ipil} alt="Leaflet Logo" className="pic" />
          <h3 className='imtext'>ipil</h3>
          </div>
          <div className='i+t`'>
          <img src={kalios} alt="Leaflet Logo" className="pic" />
          <h3 className='imtext'>kalios</h3>
          </div>
          <div className='i+t`'>
          <img src={kamagong} alt="Leaflet Logo" className="pic" />
          <h3 className='imtext'>kamagong</h3>
          </div>
          <div className='i+t`'>
          <img src={mulawin} alt="Leaflet Logo" className="pic" />
          <h3 className='imtext'>mulawin</h3>
          </div>
          <div className='i+t`'>
          <img src={narra} alt="Leaflet Logo" className="pic" />
          <h3 className='imtext'>narra</h3>
          </div>
          <div className='i+t`'>
          <img src={sintores} alt="Leaflet Logo" className="pic" />
          <h3 className='imtext'>sintores</h3>
          </div>
          <div className='i+t`'>
          <img src={yakal} alt="Leaflet Logo" className="pic" />
          <h3 className='imtext'>yakal</h3>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
