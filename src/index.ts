import { Component } from './components/component/component';
import { Container } from './components/container/container';
import { Card } from './components/card/card';
import { characters } from './mocks/characters';

import './style.scss';

new Container('.container');

new Card('.characters-list');
