import { useState } from 'react';
import { bg1, bg2, bg3, bg4 } from './assets/images/';
import phrases from './phrases.json';
import Card from '../src/components/Card';
import Button from '../src/components/Button';
import Heading from '../src/components/Heading';
import './App.css';

const images = [bg1, bg2, bg3, bg4];

function randomIndex(max) {
	return Math.floor(Math.random() * max);
}

function App() {
	const [phraseData, setPhraseData] = useState(
		phrases[randomIndex(phrases.length)],
	);
	const [img, setImg] = useState(images[randomIndex(images.length)]);

	function changePhrase() {
		setPhraseData(phrases[randomIndex(phrases.length)]);
		setImg(images[randomIndex(images.length)]);
	}

	return (
		<>
			<div className="wrapper" style={{ backgroundImage: `url(${img})` }}>
				<div className="container">
					<Heading />
					<Card
						key={phraseData.phrase}
						phrase={phraseData.phrase}
						author={phraseData.author}
					/>
					<Button onClick={changePhrase} className="btn"></Button>
				</div>
			</div>
		</>
	);
}

export default App;
