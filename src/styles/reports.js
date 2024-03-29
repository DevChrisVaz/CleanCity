import styled from 'styled-components';

export const ReportsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    min-height: calc(100vh - 60px);
    width: 100%;
    background: ${props => props.isDark ? '#181818' : '#EEE'};
    padding: 30px 50px;

    & .create {
        & > p {
            font-size: 18px;
            font-weight: 600;
            color: #2E8049;
            margin: 0 20px 10px;
        }
        & form {
            display: flex;
            flex-direction: column;
            width: 400px;
            min-height: 430px;
            border: 1px solid #2E8049;
            border-radius: 20px;
            padding: 20px;

            & > .form-group {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
                & > label {
                    color: ${props => props.isDark ? '#FFF' : '#000'};
                }
                & > input {
                    width: 250px;
                    padding: 5px 10px;
                    border-radius: 15px;
                    border: 1px solid #2E8049;
                    outline: none;
                    background: ${props => props.isDark ? '#282828' : '#DDD'};
                    color: ${props => props.isDark ? '#FFF' : '#000'};
                }
                & > textarea {
                    width: 250px;
                    height: 70px;
                    padding: 5px 10px;
                    border-radius: 15px;
                    border: 1px solid #2E8049;
                    outline: none;
                    resize: none;
                    background: ${props => props.isDark ? '#282828' : '#DDD'};
                    color: ${props => props.isDark ? '#FFF' : '#000'};
                }
            }
            & > button {
                width: 200px;
                padding: 10px;
                border-radius: 20px;
                border: none;
                background: #2E8049;
                color: #fff;
                align-self: center;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
            }
        }
    }

    & .my-reports {    
        margin-left: 50px;    
        & > p {
            font-size: 18px;
            font-weight: 600;
            color: #2E8049;
            margin: 0 20px 10px;
        }

        & > .reports {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 400px;
            height: 430px;
            
            box-shadow: inset ${props => props.isDark ? '2px 0 15px 8px #111' : '2px 2px 4px 2px rgba(100,100,100,.2)'};
            border-radius: 20px;
            padding: 20px;
            overflow-y: auto;

            & > p {
                color: ${props => props.isDark ? '#FFF' : '#000'};
            }

            & > .report {
                position: relative;
                width: 100%;
                min-height: 100px;
                border-radius: 50px;
                padding: 10px 30px;
                margin-bottom: 18px;
                box-shadow: ${props => props.isDark ? '2px 0 15px 8px #111' : '2px 2px 4px 2px rgba(100,100,100,.2)'};

                & > .report-header {
                    display: flex;
                    justify-content: space-between;

                    & > .title {
                        color: #2E8049;
                        font-size: 18px;
                        font-weight: 600;
                    }

                    & > .date {
                        color: #666;
                    }
                }

                & > .report-content {
                    & > .address {
                        color: ${props => props.isDark ? '#FFF' : '#000'}
                    }
                    & > .status {
                        color: #666;
                    }
                }

                & > button {
                    position: absolute;
                    right: 30px;

                    bottom: 7px;
                    padding: 5px 15px;
                    border: none;
                    background: #2E8049;
                    color: #fff;
                    border-radius: 20px;
                    cursor: pointer;
                }
            }
        }
    }
`;  