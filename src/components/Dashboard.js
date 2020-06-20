import React from 'react'
import Grid from '@material-ui/core/Grid'
import CPU from './CPU'
import Disk from './Drive'
import Mem from './Mem'
import '../style/dashboard.css'
const Dashboard = () => {
	return (
		<div className="dashboard">
			<h1 className="title">Monitor 😁</h1>

			<Grid className="grid-container" container spacing={3}>
				<Grid item className="grid-item" xs={12}>
					<CPU />
				</Grid>
				<Grid item className="grid-item" xs={12}>
					<Disk />
				</Grid>
				<Grid item className="grid-item" xs={12}>
					{/* <Mem /> */}
				</Grid>
			</Grid>
		</div>
	)
}

export default Dashboard
