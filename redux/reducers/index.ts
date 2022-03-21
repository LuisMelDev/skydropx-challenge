import { combineReducers } from 'redux'

import {shipmentReducer} from './shipmentsReducer'
import {uiReducer} from './uiReducer'
import {labelsReducer} from './labelsReducer'
import {ratesReducer} from './ratesReducer'

export default combineReducers({
    shipment:shipmentReducer,
    ui:uiReducer,
    label:labelsReducer,
    rates: ratesReducer
})