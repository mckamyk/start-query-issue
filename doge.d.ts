declare interface Window {
  dogeLabs: DogeLabsWallet
  doge: MyDogeWallet
}

type DogeLabsEvents = "accountsChanged" | "disconnect" | "close" | "networkChanged" | "connect"

type DogeLabsWallet = {
  requestAccounts: () => Promise<string[]>
  getNetwork: () => Promise<string>
  switchNetwork: (network: string) => Promise<null>
  getAccounts: () => Promise<string[]>
  getPublicKey: () => Promise<string>
  getBalance: () => Promise<number>
  signMessage: (text: string, type?: string) => Promise<string>
  pushTx: (rawTx: string) => Promise<string>

  // replace returns with objects
  getInscriptions: (cursor?: number, size?: number) => Promise<any>
  createPurchaseOfferInputs: (offerPsdtHex: string) => Promise<any>
  createBuyerPsdt: (offerPsdtHex: string, buyterRawTx: string) => Promise<any>
  buyDrc20Offer: (offerId: string, signedPsdtHex: string, address: string) => Promise<any>
  buyDoginalOffer: (offerId: string, signedPsdtHex: string, address: string) => Promise<any>
  sendBitcoin: (toAddress: string, satoshis: number, options: any) => Promise<any>
  signPsbt: (psbtHex: string, options?: any) => Promise<string>
  pushPsbt: (psbtHex: string, outputsToSkip?: number[], options?: any) => Promise<string>
  inscribeTransfer: (ticker: string, amount: string) => Promise<any>

  on: (topic: Events, cb: (data: any) => void) => void
}

// https://mydoge-com.github.io/mydogemask/
type MyDogeWallet = {
  connect: () => Promise<{ address: string; balance: number; approved: boolean }>
  getBalance: () => Promise<{ recipientAddress: string; dogeBalance: number }>
  requestTransaction: ({ recipientAddress, amount }: { recipientAddress: string; amount: number }) => Promise<{ txId: string }>
  requestInscriptionTransaction: ({
    recipientAddress,
    amount,
  }: {
    recipientAddress: string
    amount: number
  }) => Promise<{ recipientAddress: string; output: string }>
  getDrc20Balance: ({ ticker }: { ticker: string }) => Promise<{ ticker: string; address: string; availableBalance: string; transferableBalance: string }>
  getTransferableDrc20: ({ ticker }: { ticker: string }) => Promise<{
    inscriptions: {
      amount: string
      /* hash : index */
      output: string
    }[]
    ticker: string
    address: string
  }>
  requestAvailableDrc20Transaction: ({ ticker, amount }: { ticker: string; amount: number }) => Promise<{ txId: string }>
  requestPsbt: ({ rawTx, index }: { rawTx: string; index: number }) => Promise<{ txId: string }>
  signMessage: ({ message }: { message: string }) => Promise<{ signedMessage: string }>
  getTransactionStatus: ({ txId }: { txId: string }) => Promise<{ txId: string; confirmations: number; dogeAmount: string; blockTime: number; status: string }>
}
