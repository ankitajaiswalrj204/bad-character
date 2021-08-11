import React from 'react'
import {Card,Tooltip,Typography} from '@material-ui/core'
import './Charac.css'
function Charac({item}) {
    return (
        <div className="charac">
            {/* <h3>charac</h3> */}
            <Card className="card">
                <Tooltip title ={
                    <>
<Typography>Name:{item.name}</Typography>
<Typography>Birthaday:{item.birthday}</Typography>
<Typography>Occupation:{item.occupation}</Typography>
<Typography>Status:{item.status}</Typography>
<Typography>NickName:{item.nickname}</Typography>
<Typography>Portrayed:{item.portrayed}</Typography>
</>
                }>
                    
<img className="image" src={item.img} alt="photo"  />
</Tooltip>
            </Card>
        </div>
    )
}

export default Charac
