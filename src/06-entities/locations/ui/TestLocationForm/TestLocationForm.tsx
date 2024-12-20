import {ChangeEvent, memo, useCallback, useMemo} from "react";

import { SelectComponent} from "07-shared/ui/Select/SelectComponent";
import {CommentComponent} from "07-shared/ui/CommentComponent/CommentComponent";
import {ISelectNewValue} from "07-shared/types/common";

import s from './TestLocationForm.module.scss';
import {convertDataToSelect} from "../../lib/utils";
import {Env, IChangeTestLocationData, Location, TestLocation} from "../../model/types/types";



interface ITestLocationFormProps {
    locationData: TestLocation;
    locations: Location[];
    envs: Env[];
    changeTestLocation: (val: IChangeTestLocationData) => void;
    deleteTestLocation: (val: string) => void;
}

export const TestLocationForm = memo(
    ({locationData, locations, envs, changeTestLocation, deleteTestLocation}: ITestLocationFormProps) => {
        console.log('TestLocationForm')

    const onSelectChangeHandler = useCallback( (val:ISelectNewValue) => {
        changeTestLocation({
            id:   locationData.id,
            property: val.id,
            value: {
                name:val.name,
                value:val.value
            }
        })
    },[changeTestLocation, locationData.id])

    const onCommentChangeHandler = useCallback( (e:ChangeEvent<HTMLInputElement>) => {
        changeTestLocation({
            id: locationData.id,
            property: 'hint',
            value: e.target.value
        })
    },[changeTestLocation, locationData.id])

    const onDeleteHandler = () => {
        deleteTestLocation(locationData.id);
    }

    const locationSelectItems = useMemo(
        () => convertDataToSelect(locations,'locationID')
        ,[locations]);

    const envSelectItems = useMemo(
        () => convertDataToSelect(envs,'envID')
        ,[envs])


    return <div className={s.wrapper}>
        <div className={s.header}>
            <h5>
                <i className="fa-solid fa-vial"></i>
                <span>Тестовая локация {locationData.count}</span>
            </h5>
            <div className={s.trashWrapper}>
                <i onClick={onDeleteHandler} className="fa-solid fa-trash-can"></i>
            </div>
        </div>
        <div className={s.content}>
            <SelectComponent
                value={locationData.location}
                items={locationSelectItems}
                onChange={onSelectChangeHandler}
                id={'location'}
                inscription={'Локация'}
                className={s.select}
            />
            <SelectComponent
                value={locationData.env}
                items={envSelectItems}
                onChange={onSelectChangeHandler}
                id={'env'}
                inscription={'Среда'}
                className={s.select}
            />
            <div className={s.serversWrapper}>
                <span>Серверы</span>
                <i className="fa-solid fa-server"></i>
                {locationData?.servers?.map((server: string, index:number) => {
                    return (<span key={index}>{server}</span>)
                })}
            </div>
            <CommentComponent
                value={locationData.hint}
                onChange={onCommentChangeHandler}
                className={s.hint}
            />
        </div>
    </div>;
});
