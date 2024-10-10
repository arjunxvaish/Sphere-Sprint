import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { KeyboardControls } from '@react-three/drei'
import Interface from './Interface.js'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <KeyboardControls
        map={[
            { name: 'forward', keys: ['ArrowUp', 'keyW'] },
            { name: 'backward', keys: ['ArrowDown', 'keyW'] },
            { name: 'leftward', keys: ['ArrowLeft', 'keyW'] },
            { name: 'rightward', keys: ['ArrowRight', 'keyW'] },
            { name: 'jump', keys: ['Space'] }
        ]}
    >
    <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 2.5, 4, 6 ]
        } }
    >
        <Experience />
        </Canvas>
        <Interface />
    </KeyboardControls> 
)