import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
	return <div className='w-full flex flex-col lg:flex-row flex-nowrap justify-center pt-10 bg-light-dark shadow-lg'>
		<>
			<div className="max-w-screen-lg">
				<div className='w-full flex justify-between items-center flex-col border-b border-orange pb-10'>
					<div className='flex'>
						<Link href="mailto:lucasperez.apple@gmail.com">
							<FaEnvelope
								className="w-10 h-auto hover:fill-orange"
							/>
						</Link>
						<Link href="https://github.com/IPtitLu">
							<FaGithub
								className="w-10 h-auto mx-6 hover:fill-orange"
							/>
						</Link>
						<Link href="https://www.linkedin.com/in/lucas-perez-71994b17a/">
							<FaLinkedinIn
								className="w-10 h-auto hover:fill-orange"
							/>
						</Link>
					</div>
				</div>
				<p className="w-full text-center py-10">&copy; 2023 Lucas Perez. Tous droits réservés. No Copyright.</p>
			</div>
		</>
	</div>
};

export default Footer;
