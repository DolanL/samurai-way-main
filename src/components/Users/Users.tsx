import React from 'react';
import s from "./Users.module.css";
import User from "./User/User";
import {UserType} from "../../Redux/Users-reducer";
import axios from "axios";

type UsersPropsType = {
    users: Array<UserType>
    totalCount: number
    chosenPage: number
    pageSize: number
    setChosenPageHandler : (chosenPage: number) => void;
    followUserHandler: (id: number) => void
    unFollowUserHandler: (id: number) => void
    setUsersHandler: (users: Array<UserType>) => void
    setTotalCountHandler: (count: number) => void;
}


class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.chosenPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsersHandler(response.data.items)
            this.props.setTotalCountHandler(response.data.totalCount)
        })
    }

    changeChosenPage = (chosenPage: number) => {
        this.props.setChosenPageHandler(chosenPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${chosenPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsersHandler(response.data.items)
        })
    }

    render = () => {

        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)

        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                {pages.map(p => {
                    return <span key={p} onClick={() => this.changeChosenPage(p)} className={this.props.chosenPage === p ? s.chosenUser : "" }>{p} </span>
                })}
                <div className={s.users}>
                    {this.props.users.map(el => {
                        return <User key={el.id} user={el} followUserHandler={this.props.followUserHandler}
                                     unFollowUserHandler={this.props.unFollowUserHandler}/>
                    })}
                </div>
            </div>
        )
    }
}

export default Users