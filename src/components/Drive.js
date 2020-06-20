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
const Disk = () => {
	if (process.platform !== 'darwin') {
		return <div />
	}
	// fetching & updating the CPU usage
	const [info, setInfo] = useState({
		totalGb: '0',
		usedGb: '0',
		freeGb: '0',
		usedPercentage: '0',
		freePercentage: '100',
	})
	const osu = require('node-os-utils')
	const drive = osu.drive
	drive.info().then((info) => {
		setInfo(info)
	})

	return (
		<Card className="card">
			<Grid className="grid-container" container spacing={3}>
				<Grid item className="grid-item" xs={4}>
					<h1>{`${info.totalGb}gb Disk`}</h1>
				</Grid>
				<Grid item className="grid-item right" xs={8}>
					<h4>{`${info.usedGb}gb used with ${info.freeGb}gb free`}</h4>
				</Grid>
				<Grid item className="grid-item" xs={4}>
					<h2>{info.usedPercentage}%</h2>
				</Grid>
				<Grid item className="grid-item" xs={8}>
					<BorderLinearProgress
						className="progress"
						variant="determinate"
						value={50}
					/>
				</Grid>
			</Grid>
		</Card>
	)
}

export default Disk
