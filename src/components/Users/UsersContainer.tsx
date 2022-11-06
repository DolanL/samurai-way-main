import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {AppRootState} from "../../Redux/store";
import {Dispatch} from "redux";
import {followAC, setChosenPageAC, setTotalCountAC, setUsersAC, unFollowAC} from "../../Redux/Users-reducer";

const mapStateToProps = (state: AppRootState) => {
    return {
        users:state.UsersPage.Users,
        totalCount: state.UsersPage.totalCount,
        chosenPage: state.UsersPage.chosenPage,
        pageSize: state.UsersPage.pageSize
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        followUserHandler: (id: number) => {
            dispatch(followAC(id))
        },
        unFollowUserHandler: (id: number) => {
            dispatch(unFollowAC(id))
        },
        setUsersHandler : (users: Array<any>) => {
            dispatch(setUsersAC(users))
        },
        setTotalCountHandler : (count: number) => {
            dispatch(setTotalCountAC(count))
        },
        setChosenPageHandler: (chosenPage: number) => {
            dispatch(setChosenPageAC(chosenPage))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)