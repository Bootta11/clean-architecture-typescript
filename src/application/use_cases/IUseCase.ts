export interface IUseCase<IRequest, IResponse> {
    execute(_request?: IRequest): Promise<IResponse> | IResponse
}
