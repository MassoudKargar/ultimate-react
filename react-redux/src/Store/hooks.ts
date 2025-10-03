import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from './store';

type DispatchFunction = () => AppDispatch

export const useCardDispatch: DispatchFunction = useDispatch;

export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;