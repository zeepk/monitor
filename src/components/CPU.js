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
		backgroundColor: '#1a90ff',
	},
}))(LinearProgress)
const osu = require('node-os-utils')
const cpu = osu.cpu
const CPU = () => {
	// fetching & updating the CPU usage
	const [usage, setUsage] = useState(0)
	cpu.usage(1000).then((info) => {
		setUsage(info)
	})
	const cpuInfo = `${cpu.count()}-core ${cpu.model()}`
	return (
		<Card className="card">
			<Grid className="grid-container" container spacing={3}>
				<Grid item className="grid-item" xs={4}>
					<h1>CPU</h1>
				</Grid>
				<Grid item className="grid-item right" xs={8}>
					<h4>{cpuInfo}</h4>
				</Grid>
				<Grid item className="grid-item" xs={4}>
					<h2>{usage}%</h2>
				</Grid>
				<Grid item className="grid-item" xs={8}>
					<BorderLinearProgress
						className="progress"
						variant="determinate"
						value={usage}
					/>
				</Grid>
			</Grid>
		</Card>
	)
}

export default CPU
