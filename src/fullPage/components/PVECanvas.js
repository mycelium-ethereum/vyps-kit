import { useMemo } from 'react'
import { CubeTextureLoader } from 'three';
import { Canvas, useLoader } from '@react-three/fiber'

const OracleBox = ({
    texture,
}) => {

    const textureCube = useMemo(() => {
        return useLoader(
            CubeTextureLoader, [
                texture,
                "",
                "",
                "",
                "",
                "",
            ]
        )
    }, [texture])
    return (
        <mesh>
            <boxGeometry />
            <meshStandardMaterial attach="material" map={texture} />
        </mesh>
    )
}

const PVECanvas = ({
    oracleResponses,
}) => {
    return <Canvas>
        <OracleBox texture={textureCube} />
    </Canvas>
}

export default PVECanvas;