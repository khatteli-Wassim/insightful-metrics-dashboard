import { Component } from 'react';

export interface UserSettingsProps {
    theme: string;
    notificationsEnabled: boolean;
}

interface UserSettingsState {
    theme: string;
    notificationsEnabled: boolean;
}

export class UserSettings extends Component<UserSettingsProps, UserSettingsState> {
    constructor(props: UserSettingsProps) {
        super(props);
        this.state = {
            theme: props.theme,
            notificationsEnabled: props.notificationsEnabled
        };
    }

    render() {
        return (
            <div>
                <h2>User Settings</h2>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={this.state.notificationsEnabled}
                            onChange={this.toggleNotifications}
                        />
                        Enable Notifications
                    </label>
                </div>
                <div>
                    <span>Theme: {this.state.theme}</span>
                </div>
            </div>
        );
    }

    private toggleNotifications = () => {
        this.setState((prevState) => ({
            notificationsEnabled: !prevState.notificationsEnabled
        }));
    };
}
