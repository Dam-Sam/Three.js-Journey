import * as THREE from 'three'
import Sizes from './Utils/Sizes.js'
import Time from './Utils/Time.js'

export default class Experience
{
    constructor(canvas)
    {
        window.experience = this

        this.canvas = canvas

        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()

        this.sizes.on('resize', () =>
        {
            this.resize()
        })

        this.time.on('tick', () =>
        {
            this.update()
        })
    }

    resize()
    {
        console.log('Window has been resized')
    }

    update()
    {

    }
}