import Base from "./Base";
import Global from "../Global";

export default class Auth extends Base {

	/** @prop {name: scene, tips: "scene", type: Node} */
	public scene: Laya.Scene;

	constructor() {
		super();
	}

	async onAwake() {
		this.initScene();

		const width = 150;
		const height = 35;

		const style = {
			width,
			height,
			left: window.innerWidth / 2 - width / 2,
			top: window.innerHeight / 2 + 100,
		};

		const handleUserInfo = (userInfo) => {
			if (!userInfo) {
				return;
			}

			Global.userInfo = userInfo;
			this.openScene("Main");
		}

		wx.getUserInfo({
			fail: () => {
				const button = wx.createUserInfoButton({ type: "image", style, image: "image/auth_button.png" });

				button.onTap(data => {
					handleUserInfo(data.userInfo);
					button.destroy();
				});
			},
			success: data => {
				handleUserInfo(data.userInfo);
			}
		});
	}
}