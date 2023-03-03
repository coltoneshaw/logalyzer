declare namespace MattermostConfig {

  export interface ServiceSettings {
    SiteURL: string;
    WebsocketURL: string;
    LicenseFileLocation: string;
    ListenAddress: string;
    ConnectionSecurity: string;
    TLSCertFile: string;
    TLSKeyFile: string;
    TLSMinVer: string;
    TLSStrictTransport: boolean;
    TLSStrictTransportMaxAge: number;
    TLSOverwriteCiphers: any[];
    UseLetsEncrypt: boolean;
    LetsEncryptCertificateCacheFile: string;
    Forward80To443: boolean;
    TrustedProxyIPHeader: string[];
    ReadTimeout: number;
    WriteTimeout: number;
    IdleTimeout: number;
    MaximumLoginAttempts: number;
    GoroutineHealthThreshold: number;
    EnableOAuthServiceProvider: boolean;
    EnableIncomingWebhooks: boolean;
    EnableOutgoingWebhooks: boolean;
    EnableCommands: boolean;
    EnablePostUsernameOverride: boolean;
    EnablePostIconOverride: boolean;
    GoogleDeveloperKey: string;
    EnableLinkPreviews: boolean;
    EnablePermalinkPreviews: boolean;
    RestrictLinkPreviews: string;
    EnableTesting: boolean;
    EnableDeveloper: boolean;
    DeveloperFlags: string;
    EnableClientPerformanceDebugging: boolean;
    EnableOpenTracing: boolean;
    EnableSecurityFixAlert: boolean;
    EnableInsecureOutgoingConnections: boolean;
    AllowedUntrustedInternalConnections: string;
    EnableMultifactorAuthentication: boolean;
    EnforceMultifactorAuthentication: boolean;
    EnableUserAccessTokens: boolean;
    AllowCorsFrom: string;
    CorsExposedHeaders: string;
    CorsAllowCredentials: boolean;
    CorsDebug: boolean;
    AllowCookiesForSubdomains: boolean;
    ExtendSessionLengthWithActivity: boolean;
    SessionLengthWebInDays: number;
    SessionLengthWebInHours: number;
    SessionLengthMobileInDays: number;
    SessionLengthMobileInHours: number;
    SessionLengthSSOInDays: number;
    SessionLengthSSOInHours: number;
    SessionCacheInMinutes: number;
    SessionIdleTimeoutInMinutes: number;
    WebsocketSecurePort: number;
    WebsocketPort: number;
    WebserverMode: string;
    EnableGifPicker: boolean;
    GfycatAPIKey: string;
    GfycatAPISecret: string;
    EnableCustomEmoji: boolean;
    EnableEmojiPicker: boolean;
    PostEditTimeLimit: number;
    TimeBetweenUserTypingUpdatesMilliseconds: number;
    EnablePostSearch: boolean;
    EnableFileSearch: boolean;
    MinimumHashtagLength: number;
    EnableUserTypingMessages: boolean;
    EnableChannelViewedMessages: boolean;
    EnableUserStatuses: boolean;
    ExperimentalEnableAuthenticationTransfer: boolean;
    ClusterLogTimeoutMilliseconds: number;
    EnablePreviewFeatures: boolean;
    EnableTutorial: boolean;
    EnableOnboardingFlow: boolean;
    ExperimentalEnableDefaultChannelLeaveJoinMessages: boolean;
    ExperimentalGroupUnreadChannels: string;
    EnableAPITeamDeletion: boolean;
    EnableAPITriggerAdminNotifications: boolean;
    EnableAPIUserDeletion: boolean;
    ExperimentalEnableHardenedMode: boolean;
    ExperimentalStrictCSRFEnforcement: boolean;
    EnableEmailInvitations: boolean;
    DisableBotsWhenOwnerIsDeactivated: boolean;
    EnableBotAccountCreation: boolean;
    EnableSVGs: boolean;
    EnableLatex: boolean;
    EnableInlineLatex: boolean;
    PostPriority: boolean;
    EnableAPIChannelDeletion: boolean;
    EnableLocalMode: boolean;
    LocalModeSocketLocation: string;
    EnableAWSMetering: boolean;
    SplitKey: string;
    FeatureFlagSyncIntervalSeconds: number;
    DebugSplit: boolean;
    ThreadAutoFollow: boolean;
    CollapsedThreads: string;
    ManagedResourcePaths: string;
    EnableCustomGroups: boolean;
  }

  export interface TeamSettings {
    SiteName: string;
    MaxUsersPerTeam: number;
    EnableUserCreation: boolean;
    EnableOpenServer: boolean;
    EnableUserDeactivation: boolean;
    RestrictCreationToDomains: string;
    EnableCustomUserStatuses: boolean;
    EnableCustomBrand: boolean;
    CustomBrandText: string;
    CustomDescriptionText: string;
    RestrictDirectMessage: string;
    UserStatusAwayTimeout: number;
    MaxChannelsPerTeam: number;
    MaxNotificationsPerChannel: number;
    EnableConfirmNotificationsToChannel: boolean;
    TeammateNameDisplay: string;
    ExperimentalViewArchivedChannels: boolean;
    ExperimentalEnableAutomaticReplies: boolean;
    LockTeammateNameDisplay: boolean;
    ExperimentalPrimaryTeam: string;
    ExperimentalDefaultChannels: any[];
  }

  export interface ClientRequirements {
    AndroidLatestVersion: string;
    AndroidMinVersion: string;
    IosLatestVersion: string;
    IosMinVersion: string;
  }

  export interface SqlSettings {
    DriverName: string;
    DataSource: string;
    DataSourceReplicas: any[];
    DataSourceSearchReplicas: any[];
    MaxIdleConns: number;
    ConnMaxLifetimeMilliseconds: number;
    ConnMaxIdleTimeMilliseconds: number;
    MaxOpenConns: number;
    Trace: boolean;
    AtRestEncryptKey: string;
    QueryTimeout: number;
    DisableDatabaseSearch: boolean;
    MigrationsStatementTimeoutSeconds: number;
    ReplicaLagSettings: any[];
  }

  export interface LogSettings {
    EnableConsole: boolean;
    ConsoleLevel: string;
    ConsoleJson: boolean;
    EnableColor: boolean;
    EnableFile: boolean;
    FileLevel: string;
    FileJson: boolean;
    FileLocation: string;
    EnableWebhookDebugging: boolean;
    EnableDiagnostics: boolean;
    EnableSentry: boolean;
    AdvancedLoggingConfig: string;
  }

  export interface ExperimentalAuditSettings {
    FileEnabled: boolean;
    FileName: string;
    FileMaxSizeMB: number;
    FileMaxAgeDays: number;
    FileMaxBackups: number;
    FileCompress: boolean;
    FileMaxQueueSize: number;
    AdvancedLoggingConfig: string;
  }

  export interface NotificationLogSettings {
    EnableConsole: boolean;
    ConsoleLevel: string;
    ConsoleJson: boolean;
    EnableColor: boolean;
    EnableFile: boolean;
    FileLevel: string;
    FileJson: boolean;
    FileLocation: string;
    AdvancedLoggingConfig: string;
  }

  export interface PasswordSettings {
    MinimumLength: number;
    Lowercase: boolean;
    Number: boolean;
    Uppercase: boolean;
    Symbol: boolean;
  }

  export interface FileSettings {
    EnableFileAttachments: boolean;
    EnableMobileUpload: boolean;
    EnableMobileDownload: boolean;
    MaxFileSize: number;
    MaxImageResolution: number;
    MaxImageDecoderConcurrency: number;
    DriverName: string;
    Directory: string;
    EnablePublicLink: boolean;
    ExtractContent: boolean;
    ArchiveRecursion: boolean;
    PublicLinkSalt: string;
    InitialFont: string;
    AmazonS3AccessKeyId: string;
    AmazonS3SecretAccessKey: string;
    AmazonS3Bucket: string;
    AmazonS3PathPrefix: string;
    AmazonS3Region: string;
    AmazonS3Endpoint: string;
    AmazonS3SSL: boolean;
    AmazonS3SignV2: boolean;
    AmazonS3SSE: boolean;
    AmazonS3Trace: boolean;
    AmazonS3RequestTimeoutMilliseconds: number;
  }

  export interface EmailSettings {
    EnableSignUpWithEmail: boolean;
    EnableSignInWithEmail: boolean;
    EnableSignInWithUsername: boolean;
    SendEmailNotifications: boolean;
    UseChannelInEmailNotifications: boolean;
    RequireEmailVerification: boolean;
    FeedbackName: string;
    FeedbackEmail: string;
    ReplyToAddress: string;
    FeedbackOrganization: string;
    EnableSMTPAuth: boolean;
    SMTPUsername: string;
    SMTPPassword: string;
    SMTPServer: string;
    SMTPPort: string;
    SMTPServerTimeout: number;
    ConnectionSecurity: string;
    SendPushNotifications: boolean;
    PushNotificationServer: string;
    PushNotificationContents: string;
    PushNotificationBuffer: number;
    EnableEmailBatching: boolean;
    EmailBatchingBufferSize: number;
    EmailBatchingInterval: number;
    EnablePreviewModeBanner: boolean;
    SkipServerCertificateVerification: boolean;
    EmailNotificationContentsType: string;
    LoginButtonColor: string;
    LoginButtonBorderColor: string;
    LoginButtonTextColor: string;
    EnableInactivityEmail: boolean;
  }

  export interface RateLimitSettings {
    Enable: boolean;
    PerSec: number;
    MaxBurst: number;
    MemoryStoreSize: number;
    VaryByRemoteAddr: boolean;
    VaryByUser: boolean;
    VaryByHeader: string;
  }

  export interface PrivacySettings {
    ShowEmailAddress: boolean;
    ShowFullName: boolean;
  }

  export interface SupportSettings {
    TermsOfServiceLink: string;
    PrivacyPolicyLink: string;
    AboutLink: string;
    HelpLink: string;
    ReportAProblemLink: string;
    SupportEmail: string;
    CustomTermsOfServiceEnabled: boolean;
    CustomTermsOfServiceReAcceptancePeriod: number;
    EnableAskCommunityLink: boolean;
  }

  export interface AnnouncementSettings {
    EnableBanner: boolean;
    BannerText: string;
    BannerColor: string;
    BannerTextColor: string;
    AllowBannerDismissal: boolean;
    AdminNoticesEnabled: boolean;
    UserNoticesEnabled: boolean;
    NoticesURL: string;
    NoticesFetchFrequency: number;
    NoticesSkipCache: boolean;
  }

  export interface ThemeSettings {
    EnableThemeSelection: boolean;
    DefaultTheme: string;
    AllowCustomThemes: boolean;
    AllowedThemes: any[];
  }

  export interface GitLabSettings {
    Enable: boolean;
    Secret: string;
    Id: string;
    Scope: string;
    AuthEndpoint: string;
    TokenEndpoint: string;
    UserAPIEndpoint: string;
    DiscoveryEndpoint: string;
    ButtonText: string;
    ButtonColor: string;
  }

  export interface GoogleSettings {
    Enable: boolean;
    Secret: string;
    Id: string;
    Scope: string;
    AuthEndpoint: string;
    TokenEndpoint: string;
    UserAPIEndpoint: string;
    DiscoveryEndpoint: string;
    ButtonText: string;
    ButtonColor: string;
  }

  export interface Office365Settings {
    Enable: boolean;
    Secret: string;
    Id: string;
    Scope: string;
    AuthEndpoint: string;
    TokenEndpoint: string;
    UserAPIEndpoint: string;
    DiscoveryEndpoint: string;
    DirectoryId: string;
  }

  export interface OpenIdSettings {
    Enable: boolean;
    Secret: string;
    Id: string;
    Scope: string;
    AuthEndpoint: string;
    TokenEndpoint: string;
    UserAPIEndpoint: string;
    DiscoveryEndpoint: string;
    ButtonText: string;
    ButtonColor: string;
  }

  export interface LdapSettings {
    Enable: boolean;
    EnableSync: boolean;
    LdapServer: string;
    LdapPort: number;
    ConnectionSecurity: string;
    BaseDN: string;
    BindUsername: string;
    BindPassword: string;
    UserFilter: string;
    GroupFilter: string;
    GuestFilter: string;
    EnableAdminFilter: boolean;
    AdminFilter: string;
    GroupDisplayNameAttribute: string;
    GroupIdAttribute: string;
    FirstNameAttribute: string;
    LastNameAttribute: string;
    EmailAttribute: string;
    UsernameAttribute: string;
    NicknameAttribute: string;
    IdAttribute: string;
    PositionAttribute: string;
    LoginIdAttribute: string;
    PictureAttribute: string;
    SyncIntervalMinutes: number;
    SkipCertificateVerification: boolean;
    PublicCertificateFile: string;
    PrivateKeyFile: string;
    QueryTimeout: number;
    MaxPageSize: number;
    LoginFieldName: string;
    LoginButtonColor: string;
    LoginButtonBorderColor: string;
    LoginButtonTextColor: string;
    Trace: boolean;
  }

  export interface ComplianceSettings {
    Enable: boolean;
    Directory: string;
    EnableDaily: boolean;
    BatchSize: number;
  }

  export interface LocalizationSettings {
    DefaultServerLocale: string;
    DefaultClientLocale: string;
    AvailableLocales: string;
  }

  export interface SamlSettings {
    Enable: boolean;
    EnableSyncWithLdap: boolean;
    EnableSyncWithLdapIncludeAuth: boolean;
    IgnoreGuestsLdapSync: boolean;
    Verify: boolean;
    Encrypt: boolean;
    SignRequest: boolean;
    IdpURL: string;
    IdpDescriptorURL: string;
    IdpMetadataURL: string;
    ServiceProviderIdentifier: string;
    AssertionConsumerServiceURL: string;
    SignatureAlgorithm: string;
    CanonicalAlgorithm: string;
    ScopingIDPProviderId: string;
    ScopingIDPName: string;
    IdpCertificateFile: string;
    PublicCertificateFile: string;
    PrivateKeyFile: string;
    IdAttribute: string;
    GuestAttribute: string;
    EnableAdminAttribute: boolean;
    AdminAttribute: string;
    FirstNameAttribute: string;
    LastNameAttribute: string;
    EmailAttribute: string;
    UsernameAttribute: string;
    NicknameAttribute: string;
    LocaleAttribute: string;
    PositionAttribute: string;
    LoginButtonText: string;
    LoginButtonColor: string;
    LoginButtonBorderColor: string;
    LoginButtonTextColor: string;
  }

  export interface NativeAppSettings {
    AppCustomURLSchemes: string[];
    AppDownloadLink: string;
    AndroidAppDownloadLink: string;
    IosAppDownloadLink: string;
  }

  export interface ClusterSettings {
    Enable: boolean;
    ClusterName: string;
    OverrideHostname: string;
    NetworkInterface: string;
    BindAddress: string;
    AdvertiseAddress: string;
    UseIPAddress: boolean;
    EnableGossipCompression: boolean;
    EnableExperimentalGossipEncryption: boolean;
    ReadOnlyConfig: boolean;
    GossipPort: number;
    StreamingPort: number;
    MaxIdleConns: number;
    MaxIdleConnsPerHost: number;
    IdleConnTimeoutMilliseconds: number;
  }

  export interface MetricsSettings {
    Enable: boolean;
    BlockProfileRate: number;
    ListenAddress: string;
  }

  export interface ExperimentalSettings {
    ClientSideCertEnable: boolean;
    ClientSideCertCheck: string;
    LinkMetadataTimeoutMilliseconds: number;
    RestrictSystemAdmin: boolean;
    UseNewSAMLLibrary: boolean;
    CloudBilling: boolean;
    EnableSharedChannels: boolean;
    EnableRemoteClusterService: boolean;
    EnableAppBar: boolean;
  }

  export interface AnalyticsSettings {
    MaxUsersForStatistics: number;
  }

  export interface ElasticsearchSettings {
    ConnectionURL: string;
    Username: string;
    Password: string;
    EnableIndexing: boolean;
    EnableSearching: boolean;
    EnableAutocomplete: boolean;
    Sniff: boolean;
    PostIndexReplicas: number;
    PostIndexShards: number;
    ChannelIndexReplicas: number;
    ChannelIndexShards: number;
    UserIndexReplicas: number;
    UserIndexShards: number;
    AggregatePostsAfterDays: number;
    PostsAggregatorJobStartTime: string;
    IndexPrefix: string;
    LiveIndexingBatchSize: number;
    BulkIndexingTimeWindowSeconds: number;
    BatchSize: number;
    RequestTimeoutSeconds: number;
    SkipTLSVerification: boolean;
    Trace: string;
  }

  export interface BleveSettings {
    IndexDir: string;
    EnableIndexing: boolean;
    EnableSearching: boolean;
    EnableAutocomplete: boolean;
    BulkIndexingTimeWindowSeconds: number;
    BatchSize: number;
  }

  export interface DataRetentionSettings {
    EnableMessageDeletion: boolean;
    EnableFileDeletion: boolean;
    EnableBoardsDeletion: boolean;
    MessageRetentionDays: number;
    FileRetentionDays: number;
    BoardsRetentionDays: number;
    DeletionJobStartTime: string;
    BatchSize: number;
  }

  export interface GlobalRelaySettings {
    CustomerType: string;
    SMTPUsername: string;
    SMTPPassword: string;
    EmailAddress: string;
    SMTPServerTimeout: number;
  }

  export interface MessageExportSettings {
    EnableExport: boolean;
    ExportFormat: string;
    DailyRunTime: string;
    ExportFromTimestamp: number;
    BatchSize: number;
    DownloadExportResults: boolean;
    GlobalRelaySettings: GlobalRelaySettings;
  }

  export interface JobSettings {
    RunJobs: boolean;
    RunScheduler: boolean;
    CleanupJobsThresholdDays: number;
    CleanupConfigThresholdDays: number;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Plugins {}

  export interface PluginState {
    Enable: boolean;
  }

  export interface PluginStates {
    [key: string]: PluginState
  }

  export interface PluginSettings {
    Enable: boolean;
    EnableUploads: boolean;
    AllowInsecureDownloadURL: boolean;
    EnableHealthCheck: boolean;
    Directory: string;
    ClientDirectory: string;
    Plugins: Plugins;
    PluginStates: PluginStates;
    EnableMarketplace: boolean;
    EnableRemoteMarketplace: boolean;
    AutomaticPrepackagedPlugins: boolean;
    RequirePluginSignature: boolean;
    MarketplaceURL: string;
    SignaturePublicKeyFiles: any[];
    ChimeraOAuthProxyURL: string;
  }

  export interface DisplaySettings {
    CustomURLSchemes: any[];
    ExperimentalTimezone: boolean;
  }

  export interface GuestAccountsSettings {
    Enable: boolean;
    AllowEmailAccounts: boolean;
    EnforceMultifactorAuthentication: boolean;
    RestrictCreationToDomains: string;
  }

  export interface ImageProxySettings {
    Enable: boolean;
    ImageProxyType: string;
    RemoteImageProxyURL: string;
    RemoteImageProxyOptions: string;
  }

  export interface CloudSettings {
    CWSURL: string;
    CWSAPIURL: string;
  }

  export interface FeatureFlags {
    TestFeature: string;
    TestBoolFeature: boolean;
    CollapsedThreads: boolean;
    EnableRemoteClusterService: boolean;
    AppsEnabled: boolean;
    PluginPlaybooks: string;
    PluginApps: string;
    PluginFocalboard: string;
    PluginCalls: string;
    PermalinkPreviews: boolean;
    CallsMobile: boolean;
    CallsEnabled: boolean;
    BoardsFeatureFlags: string;
    GuidedChannelCreation: boolean;
    InviteToTeam: string;
    CustomGroups: boolean;
    BoardsDataRetention: boolean;
    NormalizeLdapDNs: boolean;
    EnableInactivityCheckJob: boolean;
    UseCaseOnboarding: boolean;
    GraphQL: boolean;
    InsightsEnabled: boolean;
    CommandPalette: boolean;
    AdvancedTextEditor: boolean;
    BoardsProduct: boolean;
    PlanUpgradeButtonText: string;
    PostPriority: boolean;
  }

  export interface ImportSettings {
    Directory: string;
    RetentionDays: number;
  }

  export interface ExportSettings {
    Directory: string;
    RetentionDays: number;
  }

  export interface Root {
    ServiceSettings: ServiceSettings;
    TeamSettings: TeamSettings;
    ClientRequirements: ClientRequirements;
    SqlSettings: SqlSettings;
    LogSettings: LogSettings;
    ExperimentalAuditSettings: ExperimentalAuditSettings;
    NotificationLogSettings: NotificationLogSettings;
    PasswordSettings: PasswordSettings;
    FileSettings: FileSettings;
    EmailSettings: EmailSettings;
    RateLimitSettings: RateLimitSettings;
    PrivacySettings: PrivacySettings;
    SupportSettings: SupportSettings;
    AnnouncementSettings: AnnouncementSettings;
    ThemeSettings: ThemeSettings;
    GitLabSettings: GitLabSettings;
    GoogleSettings: GoogleSettings;
    Office365Settings: Office365Settings;
    OpenIdSettings: OpenIdSettings;
    LdapSettings: LdapSettings;
    ComplianceSettings: ComplianceSettings;
    LocalizationSettings: LocalizationSettings;
    SamlSettings: SamlSettings;
    NativeAppSettings: NativeAppSettings;
    ClusterSettings: ClusterSettings;
    MetricsSettings: MetricsSettings;
    ExperimentalSettings: ExperimentalSettings;
    AnalyticsSettings: AnalyticsSettings;
    ElasticsearchSettings: ElasticsearchSettings;
    BleveSettings: BleveSettings;
    DataRetentionSettings: DataRetentionSettings;
    MessageExportSettings: MessageExportSettings;
    JobSettings: JobSettings;
    PluginSettings: PluginSettings;
    DisplaySettings: DisplaySettings;
    GuestAccountsSettings: GuestAccountsSettings;
    ImageProxySettings: ImageProxySettings;
    CloudSettings: CloudSettings;
    FeatureFlags: FeatureFlags;
    ImportSettings: ImportSettings;
    ExportSettings: ExportSettings;
  }

}
