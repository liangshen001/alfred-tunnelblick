import {
    AppleAppKey,
    JXAApplication,
    JXAArraySpecifier,
    JXABoolean,
    JXAInteger,
    JXANumber,
    JXARecord,
    JXASpecifier,
    JXAText,
    JXAReal,
    JXAType,
    JXADate,
    JXALocationSpecifier,
    JXAFile,
    JXAProperty,
    JXARGBColor,
    JXAPoint,
    JXARectangle,
    JXARectangleValue,
    JXAList,
    JXAItem,
    ObjectSpecifierConstructor,
    EachElementsType,
    RespondsTo,
} from "@apple-jxa/types";

export namespace Tunnelblick {
    /**
     * Tunnelblick AppleScript support
     */
    export namespace TunnelblickSuite {

        export interface Application extends JXAApplication {
            /**
             * Connect a VPN configuration.
             * @param directParameter Name of configuration to connect.
             */
            connect(directParameter: string): boolean

            /**
             * Disconnect a VPN configuration.
             * @param directParameter Name of configuration to disconnect.
             */
            disconnect(directParameter: string): boolean

            /**
             * Connect all unconnected VPN configurations.
             */
            connectAll(): number

            /**
             * Disconnect all connected VPN configurations.
             */
            disconnectAll(): number

            /**
             * Disconnect all connected VPN configurations except 'when computer starts' configurations.
             */
            disconnectAllExceptWhenComputerStarts(): number

            /**
             * Quit Tunnelblick gracefully.
             */
            quit(): number

            /**
             * Notify Tunnelblick that an OpenVPN configuration file has been changed
             * @param directParameter Name of configuration whose OpenVPN configuration file was changed
             */
            changedOpenvpnConfigurationFileFor(directParameter: string): boolean

            /**
             * Notify Tunnelblick that one or more VPN configurations have been added and/or removed.
             */
            addedOrRemovedConfigurations(): boolean

            /**
             * Save the username for a VPN configuration in the Keychain.
             * @param directParameter Username
             * @param option for: Name of configuration whose username is to be set. 
             */
            saveUsername(directParameter: string, option: { for: string }): boolean

            /**
             * Save the password for a VPN configuration in the Keychain.
             * @param directParameter Password
             * @param option for: Name of configuration whose password is to be set. 
             */
            savePassword(directParameter: string, option: { for: string }): boolean

            /**
             * Save the passphrase for a VPN configuration in the Keychain.
             * @param directParameter Passphrase
             * @param option for: Name of configuration whose passphrase is to be set. 
             */
            savePassphrase(directParameter: string, option: { for: string }): boolean

            /**
             * Delete all of the credentials (username, password, and passphrase) for a VPN configuration.
             * @param directParameter Name of configuration whose credentials are to be deleted.
             */
            deleteAllCredentialsFor(directParameter: string): boolean

            configurations: JXAArraySpecifier<TunnelblickSuite.Configuration>
            Configuration: ObjectSpecifierConstructor<Configuration>
        }

        /**
         * A VPN configuration.
         */
        export interface Configuration extends JXASpecifier<'configuration'> {
            /**
             * Name of the configuration.
             */
            name: JXAText
            /**
             * State of the configuration. 'EXITING' means disconnecting or disconnected. 'CONNECTED' means connected. Other values show progress towards a connection.
             */
            state: JXAText
            /**
             * 'LAUNCH' means the configuration will be connected automatically when Tunnelblick launches. 'START' means the configuration will be connected automatically when the computer starts. 'NO' means the configuration will not be connected automatically.
             */
            autoconnect: JXAText
            /**
             * The number of bytes that have come in through the connection since Tunnelblick was launched. (For client configurations only. This will return '0' for configurations that are functioning as a server.)
             */
            bytesIn: JXAText
            /**
             * The number of bytes that have gone out through the connection since Tunnelblick was launched. (For client configurations only. This will return '0' for configurations that are functioning as a server.)
             */
            bytesOut: JXAText
        }
    }
    export type Application = TunnelblickSuite.Application
}
declare global {
    function Application(name: AppleAppKey<'Tunnelblick'>): Tunnelblick.Application;
}
