declare module "nprogress" {
    interface NProgressOptions {
        minimum?: number
        template?: string
        easing?: string
        speed?: number
        trickle?: boolean
        trickleSpeed?: number
        showSpinner?: boolean
        parent?: string
        positionUsing?: string
        barSelector?: string
        spinnerSelector?: string
    }

    interface INProgress {
        version: string
        settings: NProgressOptions
        status: number | null

        configure(options: Partial<NProgressOptions>): INProgress
        set(n: number): INProgress
        isStarted(): boolean
        start(): INProgress
        done(force?: boolean): INProgress
        inc(amount?: number): INProgress
        trickle(): INProgress

        render(fromStart?: boolean): HTMLDivElement
        remove(): void
        isRendered(): boolean
        getPositioningCSS(): "translate3d" | "translate" | "margin"
    }

    const NProgress: INProgress
    export default NProgress
}
