import { TextTypes } from './theme'

export enum SpinnerTypes {

    BORDER = 'spinner-border',
    GROW = 'spinner-grow'
}

export default class ModelLoading {

    showLoadingModal: boolean;
    loadingMessage: string;
    spinnerType: SpinnerTypes;
    textType: TextTypes;

    constructor(
        loadingMessage: string = '',
        spinnerType = SpinnerTypes.BORDER,
        textType = TextTypes.TEXT_PRIMAARY
    ) {

        this.showLoadingModal = true;
        this.loadingMessage = loadingMessage;
        this.spinnerType = spinnerType;
        this.textType = textType;
    }
}
