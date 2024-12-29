const paymentMethods = {
    nano: {
        name: 'Nano (XNO)',
        url: 'https://nano.org',
        fee: 0.00,
        feeStructure: 'fixed',
        transactionTime: '0.35 seconds',
        inflation: '0%',
        privacy: 'Pseudonymous',
        decentralized: true,
        nakamotoCoeff: '12',
        ncTooltip: '12 Principal Representatives needed to achieve consensus',
        geography: 'Global',
        support: 'Community',
        integration: 'Easy',
        chargebacks: 'None',
        supportTooltip: 'Support through community forums and Discord',
        integrationTooltip: 'Multiple easy options available: BitRequest, Nano.to, NowNodes, etc. Simple URL-based requests or API integration',
        chargebackTooltip: 'Transactions are irreversible'
    },
    bitcoin: {
        name: 'Bitcoin (BTC)',
        url: 'https://bitcoin.org',
        fee: 1.2,
        feeStructure: 'fixed',
        transactionTime: '60 minutes',
        inflation: '0.84%',
        privacy: 'Pseudonymous',
        decentralized: true,
        nakamotoCoeff: '4',
        ncTooltip: '4 major mining pools control over 51% of hashrate',
        geography: 'Global',
        support: 'Community',
        integration: 'Medium',
        chargebacks: 'None',
        supportTooltip: 'Support through community forums and GitHub',
        integrationTooltip: 'Multiple SDKs available, requires crypto knowledge',
        chargebackTooltip: 'Transactions are irreversible'
    },
    strike: {
        name: 'Strike (Lightning)',
        url: 'https://strike.me',
        fee: 0.0,
        feeStructure: 'fixed',
        transactionTime: '< 1 second',
        inflation: '0.84%',
        privacy: 'Pseudonymous',
        decentralized: false,
        nakamotoCoeff: '1',
        ncTooltip: 'Custodial Lightning service operated by Strike',
        geography: 'US, EU, UK',
        support: '24/7 Professional',
        integration: 'Easy',
        chargebacks: 'Merchant liable',
        supportTooltip: '24/7 email and chat support',
        integrationTooltip: 'Well-documented API and mobile SDKs',
        chargebackTooltip: 'Standard chargeback fees apply'
    },
    phoenix: {
        name: 'Phoenix (Lightning)',
        url: 'https://phoenix.acinq.co',
        fee: 0.4,
        feeStructure: 'percentage',
        fixedFee: 0.04,
        transactionTime: '< 1 second',
        inflation: '0.84%',
        privacy: 'Pseudonymous',
        decentralized: true,
        nakamotoCoeff: '4',
        ncTooltip: 'Self-custodial Lightning wallet with automated channel management. ~0.4% fee for sending',
        geography: 'Global',
        support: 'Community',
        integration: 'Medium',
        chargebacks: 'None',
        supportTooltip: 'Community support via GitHub and Lightning forums',
        integrationTooltip: 'Lightning-compatible API integration',
        chargebackTooltip: 'Lightning payments are irreversible'
    },
    eth: {
        name: 'USDC (Ethereum)',
        url: 'https://www.circle.com/en/usdc',
        fee: 2.5,
        feeStructure: 'fixed',
        transactionTime: '15 minutes',
        inflation: '2.7% (USD-pegged)',
        privacy: 'Pseudonymous',
        decentralized: true,
        nakamotoCoeff: '3',
        ncTooltip: '3 major staking entities control over 50% of ETH staking',
        geography: 'Global',
        support: 'Semi-Pro',
        integration: 'Medium',
        chargebacks: 'None',
        supportTooltip: 'Mix of Circle support for USDC and community forums for network issues',
        integrationTooltip: 'Standard ERC20 integration, but high gas fees require more complex optimization',
        chargebackTooltip: 'Blockchain transactions are irreversible'
    },
    base: {
        name: 'USDC (Base)',
        url: 'https://base.org',
        fee: 0.01,
        feeStructure: 'fixed',
        transactionTime: '15 seconds',
        inflation: '2.7% (USD-pegged)',
        privacy: 'Pseudonymous',
        decentralized: false,
        nakamotoCoeff: '3',
        ncTooltip: 'Limited by Ethereum\'s NC of 3.',
        geography: 'Global',
        support: 'Professional',
        integration: 'Easy',
        chargebacks: 'None',
        supportTooltip: 'Coinbase support team and extensive developer documentation',
        integrationTooltip: 'Uses standard EVM tooling - compatible with existing Ethereum infrastructure. Multiple SDKs and easy web3 integration options like WalletConnect',
        chargebackTooltip: 'Blockchain transactions are irreversible'
    },
    solana: {
        name: 'USDC (Solana)',
        url: 'https://solana.com',
        fee: 0.001,
        feeStructure: 'fixed',
        transactionTime: '< 1 second',
        inflation: '2.7% (USD-pegged)',
        privacy: 'Pseudonymous',
        decentralized: false,
        nakamotoCoeff: '19',
        ncTooltip: '19 validators control 33% of stake. Network has experienced multiple outages. High hardware requirements limit decentralization',
        geography: 'Global',
        support: 'Semi-Pro',
        integration: 'Easy',
        chargebacks: 'None',
        supportTooltip: 'Mix of Circle support for USDC and community forums for network issues',
        integrationTooltip: 'Well-documented SDKs and multiple integration options like Solana Pay',
        chargebackTooltip: 'Blockchain transactions are irreversible'
    },
    stripe: {
        name: 'Stripe',
        url: 'https://stripe.com',
        fee: 2.9,
        feeStructure: 'percentage',
        fixedFee: 0.30,
        transactionTime: '2-7 business days',
        inflation: '2.7% (USD)',
        privacy: 'None',
        decentralized: false,
        nakamotoCoeff: '1',
        ncTooltip: 'Centralized payment processor',
        geography: 'Global (40+ countries)',
        support: '24/7 Professional',
        integration: 'Easy',
        chargebacks: 'Merchant liable',
        supportTooltip: '24/7 phone, email, and chat support',
        integrationTooltip: 'Well-documented APIs and SDKs for all platforms',
        chargebackTooltip: 'Standard 2.9% + $15 chargeback fee'
    },
    square: {
        name: 'Square',
        url: 'https://squareup.com',
        fee: 2.6,
        feeStructure: 'percentage',
        fixedFee: 0.10,
        transactionTime: '1-2 business days',
        inflation: '2.7% (USD)',
        privacy: 'None',
        decentralized: false,
        nakamotoCoeff: '1',
        ncTooltip: 'Centralized payment processor',
        geography: 'Global (30+ countries)',
        support: '24/7 Professional',
        integration: 'Easy',
        chargebacks: 'Merchant liable',
        supportTooltip: '24/7 phone and email support',
        integrationTooltip: 'Well-documented APIs and SDKs',
        chargebackTooltip: 'Standard chargeback fees apply'
    },
    toast: {
        name: 'Toast',
        url: 'https://pos.toasttab.com',
        fee: 2.49,
        feeStructure: 'percentage',
        fixedFee: 0.15,
        transactionTime: '1-2 business days',
        inflation: '2.7% (USD)',
        privacy: 'None',
        decentralized: false,
        nakamotoCoeff: '1',
        ncTooltip: 'Centralized payment processor',
        geography: 'US',
        support: 'Professional',
        integration: 'Easy',
        chargebacks: 'Merchant liable',
        supportTooltip: 'Business hours support',
        integrationTooltip: 'POS integration required',
        chargebackTooltip: 'Standard chargeback fees apply'
    },
    venmo: {
        name: 'Venmo Business',
        url: 'https://venmo.com/business',
        fee: 1.9,
        feeStructure: 'percentage',
        fixedFee: 0.10,
        transactionTime: '1-3 business days',
        inflation: '2.7% (USD)',
        privacy: 'None',
        decentralized: false,
        nakamotoCoeff: '1',
        ncTooltip: 'Owned by PayPal',
        geography: 'US only',
        support: 'Professional',
        integration: 'Easy',
        chargebacks: 'Merchant liable',
        supportTooltip: 'PayPal business support',
        integrationTooltip: 'Simple API integration',
        chargebackTooltip: 'PayPal chargeback policies apply'
    },
    zelle: {
        name: 'Zelle Business',
        url: 'https://www.zellepay.com/business',
        fee: 2.5,
        feeStructure: 'percentage',
        fixedFee: 0.0,
        transactionTime: '1-3 business days',
        inflation: '2.7% (USD)',
        privacy: 'None',
        decentralized: false,
        nakamotoCoeff: '1',
        ncTooltip: 'Owned by major US banks',
        geography: 'US only',
        support: 'Professional',
        integration: 'Medium',
        chargebacks: 'None',
        supportTooltip: 'Bank-provided support',
        integrationTooltip: 'Bank integration required',
        chargebackTooltip: 'No chargebacks allowed'
    },
    cashapp: {
        name: 'Cash App Business',
        url: 'https://cash.app/business',
        fee: 2.75,
        feeStructure: 'percentage',
        fixedFee: 0.0,
        transactionTime: '1-3 business days',
        inflation: '2.7% (USD)',
        privacy: 'None',
        decentralized: false,
        nakamotoCoeff: '1',
        ncTooltip: 'Owned by Block (formerly Square)',
        geography: 'US & UK',
        support: 'Professional',
        integration: 'Easy',
        chargebacks: 'Merchant liable',
        supportTooltip: 'In-app and email support',
        integrationTooltip: 'Simple API integration',
        chargebackTooltip: 'Standard chargeback policies'
    },
    paypal: {
        name: 'PayPal Business',
        url: 'https://www.paypal.com/business',
        fee: 2.99,
        feeStructure: 'percentage',
        fixedFee: 0.49,
        transactionTime: '1-3 business days',
        inflation: '2.7% (USD)',
        privacy: 'None',
        decentralized: false,
        nakamotoCoeff: '1',
        ncTooltip: 'Centralized payment processor',
        geography: 'Global (200+ countries)',
        support: '24/7 Professional',
        integration: 'Easy',
        chargebacks: 'Merchant liable',
        supportTooltip: '24/7 phone and email support',
        integrationTooltip: 'Well-documented APIs and SDKs',
        chargebackTooltip: 'PayPal Seller Protection available'
    },
    clover: {
        name: 'Clover',
        url: 'https://www.clover.com',
        fee: 2.3,
        feeStructure: 'percentage',
        fixedFee: 0.10,
        transactionTime: '1-2 business days',
        inflation: '2.7% (USD)',
        privacy: 'None',
        decentralized: false,
        nakamotoCoeff: '1',
        ncTooltip: 'Owned by Fiserv',
        geography: 'US, UK, EU',
        support: 'Professional',
        integration: 'Easy',
        chargebacks: 'Merchant liable',
        supportTooltip: 'Phone and email support',
        integrationTooltip: 'POS integration required',
        chargebackTooltip: 'Standard chargeback fees apply'
    },
    shopify: {
        name: 'Shopify Payments',
        url: 'https://www.shopify.com/payments',
        fee: 2.9,
        feeStructure: 'percentage',
        fixedFee: 0.30,
        transactionTime: '2-3 business days',
        inflation: '2.7% (USD)',
        privacy: 'None',
        decentralized: false,
        nakamotoCoeff: '1',
        ncTooltip: 'Uses Stripe infrastructure',
        geography: 'Global (175+ countries)',
        support: '24/7 Professional',
        integration: 'Easy',
        chargebacks: 'Merchant liable',
        supportTooltip: '24/7 Shopify support',
        integrationTooltip: 'Built into Shopify platform',
        chargebackTooltip: 'Standard Stripe chargeback policies'
    },
    aloha: {
        name: 'Aloha POS',
        url: 'https://www.ncr.com/restaurant/aloha-cloud-pos',
        fee: 2.49,
        feeStructure: 'percentage',
        fixedFee: 0.15,
        transactionTime: '2-3 business days',
        inflation: '2.7% (USD)',
        privacy: 'None',
        decentralized: false,
        nakamotoCoeff: '1',
        ncTooltip: 'Owned by NCR Corporation',
        geography: 'US focused',
        support: 'Professional',
        integration: 'Complex',
        chargebacks: 'Merchant liable',
        supportTooltip: 'NCR support team',
        integrationTooltip: 'Full POS system required',
        chargebackTooltip: 'Standard chargeback fees apply'
    },
    revel: {
        name: 'Revel Systems',
        url: 'https://revelsystems.com',
        fee: 2.45,
        feeStructure: 'percentage',
        fixedFee: 0.10,
        transactionTime: '2-3 business days',
        inflation: '2.7% (USD)',
        privacy: 'None',
        decentralized: false,
        nakamotoCoeff: '1',
        ncTooltip: 'Owned by Welsh, Carson, Anderson & Stowe',
        geography: 'US, UK, EU',
        support: 'Professional',
        integration: 'Complex',
        chargebacks: 'Merchant liable',
        supportTooltip: 'Business hours support',
        integrationTooltip: 'Full POS system required',
        chargebackTooltip: 'Standard chargeback fees apply'
    },
    lightspeed: {
        name: 'Lightspeed Payments',
        url: 'https://www.lightspeedhq.com/pos/retail/payments/',
        fee: 2.6,
        feeStructure: 'percentage',
        fixedFee: 0.20,
        transactionTime: '2-3 business days',
        inflation: '2.7% (USD)',
        privacy: 'None',
        decentralized: false,
        nakamotoCoeff: '1',
        ncTooltip: 'Part of Lightspeed Commerce Inc.',
        geography: 'Global',
        support: 'Professional',
        integration: 'Complex',
        chargebacks: 'Merchant liable',
        supportTooltip: 'Business hours support',
        integrationTooltip: 'Full POS system required',
        chargebackTooltip: 'Standard chargeback fees apply'
    },
    heartland: {
        name: 'Heartland Payment',
        url: 'https://www.heartland.us',
        fee: 2.6,
        feeStructure: 'percentage',
        fixedFee: 0.10,
        transactionTime: '1-2 business days',
        inflation: '2.7% (USD)',
        privacy: 'None',
        decentralized: false,
        nakamotoCoeff: '1',
        ncTooltip: 'Owned by Global Payments',
        geography: 'US focused',
        support: 'Professional',
        integration: 'Medium',
        chargebacks: 'Merchant liable',
        supportTooltip: 'Phone and email support',
        integrationTooltip: 'Various integration options',
        chargebackTooltip: 'Standard chargeback fees apply'
    }
};

function calculateFee(amount, method) {
    const paymentMethod = paymentMethods[method];
    if (paymentMethod.feeStructure === 'fixed') {
        return paymentMethod.fee;
    } else {
        return (amount * (paymentMethod.fee / 100)) + (paymentMethod.fixedFee || 0);
    }
}

function updateComparisonTable() {
    const table = document.getElementById('comparison-table');
    
    const headerRow = `
        <tr>
            <th>Payment Method</th>
            <th>Transaction Fee</th>
            <th>Processing Time</th>
            <th>Annual Inflation</th>
            <th>Privacy</th>
            <th>Decentralized</th>
            <th title="Number of entities needed to control/compromise the network">Nakamoto Coefficient</th>
            <th>Geography</th>
            <th title="Level of customer support available">Support</th>
            <th title="Ease of implementation">Integration</th>
            <th title="Chargeback policies and fees">Chargebacks</th>
        </tr>
    `;

    const rows = Object.entries(paymentMethods).map(([key, method]) => {
        // Color coding for fees
        const getFeeColor = (fee, structure) => {
            if (fee === 0) return '#47c54d';  // Green for zero fees
            if (structure === 'percentage') {
                if (fee <= 0.5) return '#72ea7d';  // Light green for low percentage
                if (fee <= 1.0) return '#fff4de';  // Yellow for medium
                return '#ffccc7';  // Red for high percentage
            } else {
                if (fee <= 0.1) return '#72ea7d';  // Light green for low fixed fee
                if (fee <= 1.0) return '#fff4de';  // Yellow for medium
                return '#ffccc7';  // Red for high fixed fee
            }
        };

        // Color coding for inflation
        const getInflationColor = (inflation) => {
            const rate = parseFloat(inflation);
            if (isNaN(rate) || inflation.includes('USD')) return '';  // No color for USD-pegged
            if (rate === 0) return '#47c54d';  // Green for zero inflation
            if (rate <= 1) return '#72ea7d';   // Light green for low inflation
            if (rate <= 2) return '#fff4de';   // Yellow for medium
            return '#ffccc7';                  // Red for high inflation
        };

        let feeDisplay;
        if (method.feeStructure === 'percentage') {
            feeDisplay = `${method.fee}% + $${method.fixedFee || 0}`;
        } else {
            feeDisplay = `$${method.fee}`;
        }

        // Color coding for processing time
        const getTimeColor = (time) => {
            if (time.includes('second')) return '#47c54d';  // Green for seconds
            if (time.includes('minute')) return '#fff4de';  // Yellow for minutes
            if (time.includes('hour') || time.includes('business day')) return '#ffccc7';  // Red for hours/days
            return '';
        };

        // Color coding for decentralization
        const getDecentralizedColor = (isDecentralized) => {
            return isDecentralized ? '#47c54d' : '#ffccc7';
        };

        // Color coding for Nakamoto Coefficient
        const getNakamotoColor = (nc) => {
            const coefficient = parseInt(nc);
            if (coefficient >= 10) return '#47c54d';  // Green for high decentralization
            if (coefficient >= 4) return '#fff4de';   // Yellow for medium
            return '#ffccc7';                        // Red for low
        };

        // Color coding for integration complexity
        const getIntegrationColor = (complexity) => {
            switch (complexity.toLowerCase()) {
                case 'easy': return '#47c54d';
                case 'medium': return '#fff4de';
                case 'complex': return '#ffccc7';
                default: return '';
            }
        };

        // Color coding for support
        const getSupportColor = (support) => {
            if (support.includes('24/7')) return '#47c54d';         // Best - 24/7 Professional
            if (support.includes('Professional')) return '#72ea7d';  // Professional
            if (support.includes('Semi-Pro')) return '#fff4de';     // Mixed support
            if (support.includes('Community')) return '#ffccc7';    // Community only
            return '';
        };

        // Add color coding for chargebacks
        const getChargebackColor = (policy) => {
            switch (policy) {
                case 'None':
                    return '#47c54d';  // Green for no chargebacks (best for merchant)
                case 'Limited':
                    return '#fff4de';  // Yellow for limited chargeback risk
                case 'Merchant liable':
                    return '#ffccc7';  // Red for full merchant liability (worst for merchant)
                default:
                    return '';
            }
        };

        return `
            <tr>
                <td><a href="${method.url}" target="_blank" rel="noopener noreferrer">${method.name}</a></td>
                <td style="background-color: ${getFeeColor(method.fee, method.feeStructure)}">${feeDisplay}</td>
                <td style="background-color: ${getTimeColor(method.transactionTime)}">${method.transactionTime}</td>
                <td style="background-color: ${getInflationColor(method.inflation)}">${method.inflation}</td>
                <td>${method.privacy}</td>
                <td style="background-color: ${getDecentralizedColor(method.decentralized)}">${method.decentralized ? '✓' : '✗'}</td>
                <td style="background-color: ${getNakamotoColor(method.nakamotoCoeff)}" title="${method.ncTooltip || ''}">${method.nakamotoCoeff}</td>
                <td>${method.geography}</td>
                <td style="background-color: ${getSupportColor(method.support)}" title="${method.supportTooltip}">${method.support}</td>
                <td style="background-color: ${getIntegrationColor(method.integration)}" title="${method.integrationTooltip}">${method.integration}</td>
                <td style="background-color: ${getChargebackColor(method.chargebacks)}" title="${method.chargebackTooltip}">${method.chargebacks}</td>
            </tr>
        `;
    }).join('');

    table.innerHTML = headerRow + rows;
}

function getFeeColor(actualFee, feeStructure, amount = 100) {
    // Calculate fee as a percentage of the total amount
    const feePercentage = (actualFee / amount) * 100;
    console.log(`Fee: $${actualFee}, Percentage: ${feePercentage.toFixed(2)}%`);

    // Hard limits on absolute fee amounts regardless of percentage
    if (actualFee > 20) {
        console.log('Fee over $20 - always red');
        return '#f44336';
    }
    if (actualFee > 10) {
        console.log('Fee over $10 - always salmon');
        return '#ffccc7';
    }

    // For smaller amounts, use percentage-based coloring
    if (feePercentage === 0) {
        console.log('Zero fee - brightest green');
        return '#47c54d';
    }
    if (feePercentage <= 0.1) {
        console.log('Under 0.1% - light green');
        return '#72ea7d';
    }
    if (feePercentage <= 0.5 && actualFee <= 3) {
        console.log('Under 0.5% and under $3 - green');
        return '#c6f6c8';
    }
    if (feePercentage <= 1.0 && actualFee <= 6) {
        console.log('Under 1% and under $6 - yellow');
        return '#ffc0a3';
    }
    if (feePercentage <= 2.0 && actualFee <= 9) {
        console.log('Under 2% and under $9 - light orange');
        return '#ffd5cc';
    }
    if (feePercentage <= 3.0 && actualFee <= 12) {
        console.log('Under 3% and under $12 - salmon');
        return '#ffccc7';
    }
    
    console.log('High fee or percentage - red');
    return '#f44336';
}

function updateComparison() {
    const amount = parseFloat(document.getElementById('amount').value);
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    for (const [key, method] of Object.entries(paymentMethods)) {
        const fee = calculateFee(amount, key);
        const total = amount + fee;
        const backgroundColor = getFeeColor(fee, method.feeStructure, amount);
        
        const methodDiv = document.createElement('div');
        methodDiv.className = 'payment-method';
        methodDiv.style.backgroundColor = backgroundColor;
        methodDiv.innerHTML = `
            <h3><a href="${method.url}" target="_blank" rel="noopener noreferrer">${method.name}</a></h3>
            <div class="fee-info">
                <div class="fee">
                    <span class="label">Fee</span>
                    <span class="amount">$${fee.toFixed(2)}</span>
                </div>
                <div class="total">
                    <span class="label">Total</span>
                    <span class="amount">$${total.toFixed(2)}</span>
                </div>
            </div>
            <div class="processing-time">
                <span class="label">Processing Time</span>
                <span class="value">${method.transactionTime}</span>
            </div>
        `;
        resultsDiv.appendChild(methodDiv);
    }

    updateComparisonTable();
}

document.getElementById('calculate').addEventListener('click', updateComparison);
document.addEventListener('DOMContentLoaded', () => updateComparison()); 