import React from 'react'
import { Tile, TileBackground, TileContent, TileWrapper } from './tile'
import { WorkBackground, WorkContainer, WorkLeft, WorkRight, WorkLink } from './work'
import Image from 'next/image'
const Works = () => ( 
	<TileWrapper numOfPages={3}>
		<TileBackground>
		<WorkBackground />
		</TileBackground>
		<TileContent>
		<Tile 
		page={0} 
		renderContent={({progress}) => (
			<WorkContainer>
				<WorkLeft progress={progress}>
					<div><WorkLink href="https://ome.tv/">OmeTv</WorkLink></div>
					<div className="text-4xl md:text-5xl font-semibold tracking-tight">The application supports PC, web and iOS. This application helps us to find friends all over every country, users will be connected with each other based on the country they choose or the interests they desire, from there, they can exchange, make friends, talk to each other. Help improve English very well</div>
				</WorkLeft>
				<WorkRight progress={progress}>
					<Image src="/assets/works/ometv.png" layout="responsive" width={840} height={1620} alt="OmeTv" /> 

				</WorkRight>
			
			</WorkContainer>
		)}
		></Tile>
			<Tile 
				page={1} 
				renderContent={({progress}) => (
							<WorkContainer>
				<WorkLeft progress={progress}>
					<div><WorkLink href="https://evernote.com/intl/vi/">Evernote</WorkLink></div>
					<div className="text-4xl md:text-5xl font-semibold tracking-tight">Evernote is a tool to help you take notes of the necessary content, set reminders, alarms if you need to be on time or on time. Even in the Evernote tool, you can attach images, recordings, music, videos, files, etc. to serve for quick content search. Evernote software also has the ability to synchronize between devices using the same account, Evernote tool is currently being developed for: Android, IOS, MacOS, Windows...</div>

				</WorkLeft>
						<WorkRight progress={progress}>
					<Image src="/assets/works/evernote.png" layout="responsive" width={840} height={1620} alt="Evernote" /> 

				</WorkRight>
			
			</WorkContainer>

				)}
			></Tile>
						<Tile 
							page={2} 
							renderContent={({progress}) => (
							<WorkContainer>
				<WorkLeft progress={progress}>
					<div><WorkLink href="https://www.forestapp.cc/">Forest - Stay focused</WorkLink></div>
					<div className="text-4xl md:text-5xl font-semibold tracking-tight">Our learning is often distracted by social networks, phones, games! This is a tool to help you stop touching your phone to focus on doing something. The way it works is very simple, your phone will go into planting mode and if you exit to do something else, the tree will die.</div>

				</WorkLeft>
								<WorkRight progress={progress}>
					<Image src="/assets/works/Forest.png" layout="responsive" width={840} height={1620} alt="Forest" /> 

				</WorkRight>
	
			</WorkContainer>
		
							)}
				></Tile>


		</TileContent>

	</TileWrapper>
										)
										


export default Works
