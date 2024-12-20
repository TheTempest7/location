import {ChangeEvent} from "react";

import { SelectComponent} from "07-shared/ui/Select/SelectComponent";
import {useStore} from "07-shared/lib/hooks/useStore";
import {CommentComponent} from "07-shared/ui/CommentComponent/CommentComponent";
import {ISelectNewValue} from "07-shared/types/common";

import s from './TestLocationForm.module.scss';
import {convertDataToSelect} from "../../lib/utils";
import {Env, Location, TestLocation} from "../../model/types/types";


interface ITestLocationFormProps {
    locationData: TestLocation;
    locations: Location[];
    envs: Env[];
}

export const TestLocationForm = ({locationData, locations, envs}: ITestLocationFormProps) => {
    const {sliceLocation} = useStore();

    const onSelectChangeHandler = (val:ISelectNewValue) => {
        sliceLocation.changeTestLocationData({
            id:   locationData.id,
            property: val.id,
            value: {
                name:val.name,
                value:val.value
            }
        })
    }

    const onCommentChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        sliceLocation.changeTestLocationData({
            id: locationData.id,
            property: 'hint',
            value: e.target.value
        })
    }

    const onDeleteHandler = () => {
        sliceLocation.deleteTestLocation(locationData.id);
    }

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
                items={convertDataToSelect(locations,'locationID')}
                onChange={onSelectChangeHandler}
                id={'location'}
                inscription={'Локация'}
                className={s.select}
            />
            <SelectComponent
                value={locationData.env}
                items={convertDataToSelect(envs,'envID')}
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
};
