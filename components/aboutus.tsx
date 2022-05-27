import React from 'react'
import Member from './member' 
const AboutUs: React.FC = () => {
return ( 
	<section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
		<div className="container mx-auto px-11"> 
			<p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
		<strong>We will suggest useful applications for you quickly and conveniently. </strong> Our team will help you find useful applications for the issue you are interested in
		</p>
		</div>
		<div className="container mx-auto px-11 text-center mt-28">
	<h2>Our team</h2>
			<div className="mt-2">the &ldquo;sac4&rdquo;</div>
			<div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
				<Member id="phunlt" name="PhuNguyen" socialId="@nguyenletatphu" link="https://github.com/nguyenletatphu"/>
				<Member id="nhuntn" name="NhuNguyen" socialId="@nguyenthingocnhu" link="https://github.com/nguyenletatphu"/>
				<Member id="phudc" name="PhuDoan" socialId="@doancatphu" link="https://github.com/nguyenletatphu"/>
				<Member id="nacm" name="Nacm" socialId="@caomyna" link="https://github.com/nguyenletatphu"/>


			<div>member</div>
			<div>member</div>
			<div>member</div>
			<div>member</div>
			</div>
		</div>
	</section>
	
	
			 )


}

export default AboutUs 
