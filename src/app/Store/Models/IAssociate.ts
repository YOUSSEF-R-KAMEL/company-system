import { EntityState } from "@ngrx/entity"

export interface IAssociate {
  id: number,
  name: string,
  email: string,
  phone: string,
  type: string,
  address: string,
  associateGroup: string,
  status: boolean
}

export interface IAssociateState {
  list:IAssociate[],
  associateObj: IAssociate,
  errorMsg:string
}

export interface IAssociateModel extends EntityState<IAssociate> {
  errorMsg:string,
  isLoading: boolean
}