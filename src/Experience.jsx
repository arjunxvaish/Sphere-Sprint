import { Physics } from '@react-three/rapier'
import Lights from './Lights.jsx'
import { Level } from './Level.jsx'
import Player from './Player.jsx'
import useGame from './stores/useGame.js'

export default function Experience()
{
    const blocksCount = useGame((state) => state.blocksCount)
    // const blocksSeed = useGame((state) => state.blocksSeed)

    return <>
    <color args = {['#bdedfc']} attach= "background" />

    <Physics debug ={ false }>  
        <Lights />
            
            <Level count={blocksCount} />
        <Player /> 
    </Physics>
    </>
}