import { PERM_CAMERA } from '../constants';

export function setCameraPermission(cameraPerm) {
	return {
	type: PERM_CAMERA,
	payload: cameraPerm,
	}
}