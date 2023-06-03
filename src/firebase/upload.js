import DATA from '../data/DATA.json' assert {type: 'json'};
import {collection, addDoc } from 'firebase/firestore';
import {db} from './config.js';

DATA.forEach((el) => delete el.id)

const productosRef = collection(db, 'items')

DATA.forEach((el) => {
    addDoc(productosRef, el)
})