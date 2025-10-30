---
title: Access Control Components
sidebar:
    order: 3
tableOfContents:
    minHeadingLevel: 3
    maxHeadingLevel: 4
---

### Access Control Components

#### Access Control Hardware

1. **Readers**

    Readers are used to collect credential information from users seeking access.
    Common types include proxity readers, smart card readers and biometric readers.

    Readers can be mounted on doors, turnstiles or gates and interface with access
    control systems.

2. **Controllers**

    Access control controllers are the brains of the system. They process information
    from readers, verify credentials and make access decisions.

    Controllers are responsible for sending signals to unlock or lock doors or
    gates. They can standalone or part of a networked system.

3. **Locks**

    Access control locks are used to physically secure doors or entry points.
    Electronic locks, magnetic locks and electronic strikes are common types.
    These locks can be controlled and monitored by access control systems. Locks
    are ussually installed alongside other hardware components.

4. **Sensors**

    Access control sensors are used to detect various conditions at entry points.
    Door positions sensors indicate whether a door is open or closed. Motion
    detect movement in areas and trigger alerts.

#### Access Control Software

Access controls software manages the configuration, administration and monitoring
of access control systems. The key functions include user and credential management,
access policies, event logging and reporting.

Software can be hosted locally or in the cloud, offering varying degrees of scability
and remote management. 

Access control software often intergrates with other security systems like video
surveillance and intrustion detection.

#### Credential Types

1. **Cards**

    Users present the card to a reader to gain access. Cards can store information
    digitally or on magnetic stripes. Examples include, proxity cards or smart cards.

2. **Biometrics**

    Biometrics credentials are unique biological traits for authentication. They
    offer a high level of security because they are hard to forge. They
    include fingerprint scanning, facial recognition, iris scans and voice 
    recognition.

3. **PINs(Personal Identification Numbers)**

    PINs are numeric codes only known by the authorized user. When used in conjuction
    with other authentication measures, it provides an additional layers of security.

#### Communication Protocols

1. **Wiegang**

    It is a common communication protocol between readers and controllers. It uses
    binary code to transmit card data from the reader to the controller. It is
    known for its simplicity and reliability.

2. **RS-485**

    It is a standard for serial communication in access controls systmems. It
    allows multiple devices(readers, controllers) to communicate over long distances.
    It is known for its robustness and resistance to electrical interference.

3. **IP(Internet Protocol)**

    It used in networked IP-bases access control systems. The systems can then
    offer remote management and scalability. It can be easily be intergrated with
    other systems.

### Access Control Architectures and Topologies

Access control architecture includes structural designs and implementation models used to
manage, regulate and secure access to physical spaces using electronic systems.

#### Types of Electronic Access Control(EAC) Architectures

1. **Standalone EAC**

    A basic control access setup where each door operates *independently*. There is
    not central control unit managing multiple doors or areas.

    - Used in small installations like small offices.
    - Credential information(keycodes) are store differently in the reader at 
    each door.
    - It offers local access control without network connectivity.

    For example, A single door with a card reader that allows or denies entry
    without any network management.

2. **Networked**

    A **centralized** access control system where multiple doors and access points are
    connected and managed through a network.

    - It offers *real-time monitoring and control* from a centeral management system.
    - Credential data is *centrally stored* and can be updated or revoked quickly.
    - Access logs can be audited, and alarms and notifications can be triggered
    if authorized access is attempted.
    - It can be *intergrated with other security systems*, such as video surveillance.

    For example, An office door with multiple doors, each controlled with readers
    connected to a central server that manages who can access which areas.

3. **Cloud-based**

    A mordern architecture where the access control management system is *hosted
    in the cloud*, enabling remote access to controls systems via the internet.

    - Cloud access allows system admins to manage the system from *any location*.
    - *Simplified updates and maintenance*; there is no need for physical servers
    on-site.
    - It is *scalable* for large enterprises with multiple locations, as access
    control can be managed globally from a single interface.
    - Data security and redundancy are managed by the cloud provider.

    For example, a multifunctional company with offices around the world, uses
    a cloud-based EAC system to manage access control across all locations from
    a single dashboard.

4. **Mobile and Wireless Access Control**

    It uses wireless communication technologies such as bluetooth, Wi-Fi or NFC
    to control access. Mobile credentials stored in smartphones replace traditional
    cards or fobs.

    - It allows uses to unlock doors using their smartphones, making it a more
    convinent and flexible solution.
    - Wireless readers reduce the need for physical cabling and infrastructure.
    - It is ideal for buildings that required rapid changes to access controls
    setups or where mobile access is preferred.

    For example, employees at mordern office buildings use their smartphones to
    unlock doors via an app that connects wirelessly to the access controls system.

5. **IP-based Access Control Architecture**

    IP-based control access uses the organization's existing network infrastructure
    (TCP/IP) to connect access control devices like readers and locks to a central
    management system.

    - Readers and conrol panels communicate over the same IP network used by
    other IT systems.
    - Facilitates easy remote management and real-time data access.
    - It can intergrated seamlessly with other IP-based systems, such as video
    surveillance or intercoms.
    - It reduces the use of proprietary cabling and infrastructure, simplifying
    installation.

    For example, access control readers installed throughout a corporate campus
    are connected via Ethernet to the network and controlled from a central server,
    which also monitors IP-based CCTV cameras and other security systems.

6. **Biometric Electronic Access Control Architecture**

    This architecture relies on biometric data(fingerprints, iris, facial recognition)
    for authentication, providing higher level of security than traditional credentials.

    - Biometric authentication ensures that only the person with the registered
    physical characteristics can gain access.
    - Biometric devices are placed at entry points and biometric data is stored
    in the access control system or centrally in a network or cloud-based system.
    - It reduces risks related to lost or stolen credentials(like cards or fobs).
    - It can be integrated with multi-factor authentication (combining a biometric
    scan with a PIN or access card).

    For example, A high security facility uses fingerprint or facial recognition
    at all entry points to ensure only authorized personnel can enter sensitive
    areas.

7. **Hybrid Electronic Access Control Architecture**

    Hybrid architectures combine various access control models to specific security
    needs. They can mix cloud-based, IP-based or standalone systems to integrate
    biometric with card-based access.

    - It is flexible to deploy.
    - Easy to integrate with multiple types so credentials.
    - It is scable such that it can be adapted to various organizational requirements.
    - It is ideal for organization with complex security needs, like hospitals,
    universites or corporate campuses.

    For example, a university with card readers for access to common areas like
    libraries but employs biometric access for high-security labs, while the 
    overall system is managed via a cloud-based platform.

8. **Time-based and Conditional-based Access Control Architectures**

    This architecture defines access control based on specific time schedules or
    conditional parameters, such as working hours or operational requirements.

    - Time-base controls limits access to certain times of the day or days of the
    week (working hours).
    - Conditional-based controls adjusts access based on criteria like emergency
    situations, lockdowns or external conditions.
    - It is often integrated with emergency response systems or building management
    systems.

    For example, employees have access to a control building from 9am to 6pm, but
    the system automatically denies access control outside of these hours.

##### Comparison of Electronic Access Control Architectures

| Architectures | Key features | Use case|
|----------------|---------------|----------|
| Standalone | Simple, local control; no network needed | Small offices, residences |
| Networked | Centralized, real-time control; integrates with other security systems | Coorporate offices, large buildings |
| Cloud-based | Remote management, scalable, real-time update | Multinatianal organizations,  distributed campases |
| Mobile and Wireless | Uses mobile devices for access; no need for traditional cards | Mordern offices, techy savvy environments |
| IP-based | Leverages exising network infrastructure for real-time access control | Large enterprises, data centers |
| Biometric | High security, personal identification via biometrics | High security areas, government facilities |
| Hybrid | Combines different systems for flexibility and scability | Hospitals, universites, coorporate campases |
| Time/Conditional-based | Access based on time schedules or conditions | Educational institutions, industrial sites |

#### Electronic Access Access Models

1. **Dicretionary Access Control**

    The owner of the facility has the power to grant or revoke access to other
    users in their discretion. Credentials are assigned to users and programmed
    into the system

2. **Role-based Access Control**

    Access is granted based on the user's role within the organization. Different
    roles are assigned different levels of access to secure areas. In hospitals,
    doctors have access to patients rooms, while cleaning staff may only have access
    to common areas.

3. **Rule-based Access Control**

    Access is determined by predefined rules or policies, such as restricting
    access to certain areas to certain times of the day or based on specific 
    conditions(e.g access to certain floors is allowed, only during business hours).

4. **Time-based Access Control**

    Access rights are only valid during specific time windows. For example, a
    contractors badge may allow entry to a building only during work hours, 
    while outside these hours, the badge is automatically disabled.

#### Benefits of Electronic Access Control Systems

1. **Improved security**

    Electronic systems reduce the risk of unauthorized access, especially when
    combined with advanced credentials like biometrics.

2. **Scalability**

    Systems can be scaled from single door to multiple buildings with ease.

3. **Centralized Management**

    Administrators can manage permissions for multiple locations from a single
    interface, enhancing operational effeciency.

4. **Audit trails**

    Electronic access control systems maintain logs for all access events, helping
    with compliance and providing videos insights into security breaches.

5. **Integration**

    Electronic access controls systems can be integrated with other security
    systems such as videos surveillance, alarm systems or fire alarms to provide
    holistic security solution.

#### Access Control Topologies

1. **Star Topology**

    All access points are connected directly to the center controller or server.
    This architecture simplifies cabling and troubleshooting but may require longer
    cable runs in larger installations.

2. **Bus Topology**

    Access points are daisy-chained along a single communication bus. Data is sent
    sequencially and each devices processes the data to determine its intended
    for that service.

3. **Ring Topology**

    Each access point is connected to two other access points, forming a circular
    loop. Data travels in one direction around the ring. Ring tolopogies provide
    redundancy, but a single break in the ring can disrupt the entire network.

#### Centralized vs Decentralized Control

1. **Centralized Control**

    All decisions and data processing occur at the central controller or server.
    This provides uniform control and monitoring of all access points. Changes
    and updates to access policies can be made centrally.

2. **Decentralized Control**

    Decentralized access control systems distribute decision-making and data
    processing to individual controllers at each access point. This approach
    can be more resilient in case of network failures and offers faster response
    times.

    Decentralized systems are used where immediate decision making is critical.

#### Hybrid Systems

Hybrid access controls systems combine elements of both standalone and networked
systems. They can manage some access points in standalone mode while networking
others.

Hybrid systems are useful when upgrading an existing standalone system to
include networked capabilities or when intergrating with legacy equipment.
