import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';

export default function Home() {
	return (
		<Layout
		// categories={categories}
		// img={homepage.attributes.sideImg.data.attributes.url}
		>
			<div className="section">
				<div className="container intro">
					<div className="intro-container">
						<main>
							<h1>hello world</h1>
						</main>
					</div>
				</div>
			</div>
		</Layout>
	);
}
