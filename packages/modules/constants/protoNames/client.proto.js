import clientPacket from '@peekaboo-ssr/modules-constants/clientPacket';

const CLIENT_PACKET_MAPS = {
  [clientPacket.account.RegistAccountRequest]: 'registAccountRequest',
  [clientPacket.account.RegistAccountResponse]: 'registAccountResponse',
  [clientPacket.account.LoginRequest]: 'loginRequest',
  [clientPacket.account.LoginResponse]: 'loginResponse',
  [clientPacket.account.ChangeNicknameRequest]: 'changeNicknameRequest',
  [clientPacket.account.ChangeNicknameResponse]: 'changeNicknameResponse',
  [clientPacket.lobby.EnterLobbyRequest]: 'enterLobbyRequest',
  [clientPacket.lobby.EnterLobbyResponse]: 'enterLobbyResponse',
  [clientPacket.lobby.WaitingRoomListRequest]: 'waitingRoomListRequest',
  [clientPacket.lobby.WaitingRoomListResponse]: 'waitingRoomListResponse',
  [clientPacket.game.CreateRoomRequest]: 'createRoomRequest',
  [clientPacket.game.JoinRoomRequest]: 'joinRoomRequest',
  [clientPacket.game.JoinRoomByGameSessionIdRequest]:
    'joinRoomByGameSessionIdRequest',
  [clientPacket.dedicated.PlayerMoveRequest]: 'playerMoveRequest',
  [clientPacket.dedicated.PlayerMoveNotification]: 'playerMoveNotification',
  [clientPacket.dedicated.GhostMoveRequest]: 'ghostMoveRequest',
  [clientPacket.dedicated.GhostMoveNotification]: 'ghostMoveNotification',
  [clientPacket.dedicated.PingRequest]: 'pingRequest', // S2C
  [clientPacket.dedicated.PingResponse]: 'pingResponse', // C2S
  [clientPacket.dedicated.PlayerStateChangeRequest]: 'playerStateChangeRequest',
  [clientPacket.dedicated.PlayerStateChangeNotification]:
    'playerStateChangeNotification',
  [clientPacket.dedicated.GhostStateChangeRequest]: 'ghostStateChangeRequest',
  [clientPacket.dedicated.GhostStateChangeNotification]:
    'ghostStateChangeNotification',
  [clientPacket.dedicated.ItemChangeRequest]: 'itemChangeRequest',
  [clientPacket.dedicated.ItemChangeNotification]: 'itemChangeNotification',
  [clientPacket.dedicated.StartStageRequest]: 'startStageRequest',
  [clientPacket.dedicated.StartStageNotification]: 'startStageNotification',
  [clientPacket.dedicated.PlayerAttackedRequest]: 'playerAttackedRequest',
  [clientPacket.dedicated.PlayerLifeResponse]: 'playerLifeResponse',
  [clientPacket.dedicated.GhostAttackedRequest]: 'ghostAttackedRequest',
  [clientPacket.dedicated.ItemGetRequest]: 'itemGetRequest',
  [clientPacket.dedicated.ItemGetResponse]: 'itemGetResponse',
  [clientPacket.dedicated.ItemUseRequest]: 'itemUseRequest',
  [clientPacket.dedicated.ItemUseResponse]: 'itemUseResponse',
  [clientPacket.dedicated.ItemUseNotification]: 'itemUseNotification',
  [clientPacket.dedicated.ItemDiscardRequest]: 'itemDiscardRequest',
  [clientPacket.dedicated.ItemDiscardResponse]: 'itemDiscardResponse',
  [clientPacket.dedicated.ItemDiscardNotification]: 'itemDiscardNotification',
  [clientPacket.dedicated.DoorToggleRequest]: 'doorToggleRequest',
  [clientPacket.dedicated.DoorToggleNotification]: 'doorToggleNotification',
  [clientPacket.dedicated.StageEndNotification]: 'stageEndNotification',
  [clientPacket.dedicated.ExtractSoulRequest]: 'extractSoulRequest',
  [clientPacket.dedicated.ExtractSoulNotification]: 'extractSoulNotification',
  [clientPacket.dedicated.DisconnectPlayerNotification]:
    'disconnectPlayerNotification',
  [clientPacket.dedicated.GhostSpecialStateRequest]: 'ghostSpecialStateRequest',
  [clientPacket.dedicated.GhostSpecialStateNotification]:
    'ghostSpecialStateNotification',
  [clientPacket.dedicated.ItemDeleteNotification]: 'itemDeleteNotification',
  [clientPacket.dedicated.ItemDisuseRequest]: 'itemDisuseRequest',
  [clientPacket.dedicated.ItemDisuseNotification]: 'itemDisuseNotification',
  [clientPacket.dedicated.ItemCreateRequest]: 'itemCreateRequest',
  [clientPacket.dedicated.ItemCreateNotification]: 'itemCreateNotification',
  [clientPacket.dedicated.BlockInteractionNotification]:
    'blockInteractionNotification',
  [clientPacket.dedicated.GhostSpawnRequest]: 'ghostSpawnRequest',
  [clientPacket.dedicated.GhostSpawnNotification]: 'ghostSpawnNotification',
  [clientPacket.dedicated.ItemGetNotification]: 'itemGetNotification',
  [clientPacket.dedicated.RemainingTimeNotification]:
    'remainingTimeNotification',
  [clientPacket.dedicated.ItemPurchaseRequest]: 'itemPurchaseRequest',
  [clientPacket.dedicated.ItemPurchaseNotification]: 'itemPurchaseNotification',
  [clientPacket.dedicated.ItemPurchaseResponse]: 'itemPurchaseResponse',
  [clientPacket.dedicated.CreateRoomResponse]: 'createRoomResponse',
  [clientPacket.dedicated.JoinRoomResponse]: 'joinRoomResponse',
  [clientPacket.dedicated.JoinRoomNotification]: 'joinRoomNotification',
};

export default CLIENT_PACKET_MAPS;
