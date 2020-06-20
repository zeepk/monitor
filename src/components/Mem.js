import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import '../style/cpu.css'
const BorderLinearProgress = withStyles(() => ({
	root: {
		height: 10,
		borderRadius: 5,
	},
	colorPrimary: {
		backgroundColor: '#ededed',
	},
	bar: {
		borderRadius: 5,
		backgroundColor: '#17cc06',
	},
}))(LinearProgress)
const Mem = () => {
	// fetching & updating the CPU usage
	const [info, setInfo] = useState({
		totalMemMb: 0,
		usedMemMb: 0,
		freeMemMb: 0,
		freeMemPercentage: 0,
	})
	const osu = require('node-os-utils')
	const mem = osu.mem
	mem.info().then((info) => {
		setInfo(info)
	})

	return (
		<Card className="card">
			<Grid className="grid-container" container spacing={3}>
				<Grid item className="grid-item" xs={4}>
					<h1>Memory</h1>
				</Grid>
				<Grid item className="grid-item right" xs={8}>
					<h4>{`${info.totalMemMb}mb `}</h4>
				</Grid>
				<Grid item className="grid-item" xs={4}>
					<h2>{100 - info.freeMemPercentage}%</h2>
				</Grid>
				<Grid item className="grid-item" xs={8}>
					<BorderLinearProgress
						className="progress"
						variant="determinate"
						value={100 - info.freeMemPercentage}
					/>
				</Grid>
			</Grid>
		</Card>
	)
}

export default Mem
