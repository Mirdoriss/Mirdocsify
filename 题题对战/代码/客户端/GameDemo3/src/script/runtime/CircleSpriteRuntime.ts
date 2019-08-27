import Global from "../Global";

export default class CircleSpriteRuntime extends Laya.Sprite {

    private url: string = "";

    constructor() {
        super();
    }

    __width;
    __height;
    __scaleX;
    __scaleY;

    loadImage(url: string, complete?: Laya.Handler): Laya.Sprite {

        if (!this) {
            return;
        }

        const superLoad = super.loadImage.bind(this);

        if (!this.__width ||  !this.__height || !this.__scaleX ||  !this.__scaleY){
            this.__width = this.width;
            this.__height = this.height;
            
            try {
                this.__scaleX = this.scaleX;
                this.__scaleY = this.scaleY;
            } catch (e) {}
        }

        return superLoad(url, new Laya.Handler(this, function callback() {
            
            if (!this) {
                return;
            }

            this.width = this.__width;
            this.height = this.__height;

            try {
                this.scaleX = this.__scaleX;
                this.scaleY = this.__scaleY;
                this.removeChildren();
                this.mask = null;
            } catch (e) {}

            const mask = new Laya.Sprite();

            mask.width = this.__width;
            mask.height = this.__height;

            const radius = mask.height > mask.width ? mask.width / 2 : mask.height / 2;

            mask.graphics.drawCircle(mask.width / 2, mask.height / 2, radius, "white");

            this.addChild(mask);

            const sp = new Laya.Sprite();
            url && sp.loadImage(url, new Laya.Handler(this, function callback(){
                sp.width = this.__width;
                sp.height = this.__height;
            }));

            this.addChild(sp);

            try {
                this.mask = mask;
            } catch (e) {}

            complete && complete.run();

            this.url = url;
        }));
    }
}