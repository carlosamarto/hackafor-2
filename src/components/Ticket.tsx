import 'atropos/css'
import { Atropos } from 'atropos/react'
import { FC } from 'react'

interface TicketProps {
	avatar?: string
	name?: string
	number?: number
	username?: string
}

export const Ticket: FC<TicketProps> = ({ name = 'tpicj aforcita', number = 0, username = 'afor_digital', avatar = 'https://www.figma.com/file/oB8OIzcBcSUIBXDmmp46mb/image/553aae256d49bfd7691b401b30ec005149d24fd6' }) => {
	return (
		<div className='w-[750px] mx-auto p-5'>
			<Atropos
				shadow
				className='w-full h-full bg-transparent aspect-[16/7]'
			>
				<div className='flex h-full shadow-[0_0px_90px_-10px_#c138b820]'>
					<div
						className='relative flex flex-col justify-between p-[30px] pb-[17px] w-full h-full border-2 border-[#171717] rounded-2xl rounded-rt-0 rounded-rb-0'>
						<div className='flex gap-5'>
							<img
								data-atropos-offset="10"
								className='w-27 aspect-square rounded-full p-[0.1rem] bg-gradient-to-rb from-[#FC1C37] to-[#AD40E1]'
								src={avatar}
								alt={`Avatar de ${name}`}
							/>
							<div className='flex flex-col gap-1 justify-center'>
								<h3
									data-atropos-offset="10"
									className={`font-bold text-[35px]`}>{name}</h3>
								<span
									data-atropos-offset="10"
									className={`flex gap-1 items-center`}>
									<img src="./icons/discord.svg" className='w-6 aspect-square ' />
									<p className='font-bold'>@{username}</p>
								</span>
							</div>
						</div>
						<div
							data-atropos-offset="5"
							className='flex justify-between items-end'>
							<div className='flex gap-1'>
								<p

									className='flex flex-col items-center text-[28px] leading-tight'>
									<span className='font-100'>NOV</span>
									<span className='font-bold'>20</span>
								</p>
								<div>
									{/* what circles suposed to be? ?? */}
								</div>
							</div>
							<p
								className='text-[28px]'>
								#{number.toString().padStart(5, '0')}
							</p>
						</div>
					</div>

					<div className='w-80 h-full  flex items-center justify-center bg-gradient-to-rb from-[#FC1C37] to-[#AD40E1] rounded-2xl rounded-lt-0 rounded-lb-0'>
						<img
							data-atropos-offset="3"
							className="w-full p-6 invert-100"
							src="./images/hackafor_year.webp"
							alt="Hackafor 2024 Announcement Logo"
						/>
					</div>
				</div>

			</Atropos >
		</div >
	)
}
